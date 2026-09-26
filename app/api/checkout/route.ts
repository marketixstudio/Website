import { products } from "@/content/products-catalog";

export const runtime = "nodejs";

/**
 * Creates a payment session for a digital product.
 * Razorpay serves India (INR), Stripe Checkout serves everyone else (USD).
 * Both are called over REST so the project carries no extra SDK dependencies.
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { productSlug, gateway } = (payload || {}) as Record<string, unknown>;
  const product = typeof productSlug === "string" ? products[productSlug] : undefined;

  if (!product) {
    return Response.json({ error: "Unknown product." }, { status: 404 });
  }
  if (gateway !== "razorpay" && gateway !== "stripe") {
    return Response.json({ error: "Unknown payment method." }, { status: 400 });
  }

  const origin = new URL(request.url).origin;

  if (gateway === "razorpay") {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) {
      return Response.json({ error: "Payments are not configured yet." }, { status: 503 });
    }

    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`,
      },
      body: JSON.stringify({
        amount: product.priceInr * 100, // Razorpay expects paise
        currency: "INR",
        receipt: `${product.slug}-${Date.now()}`,
        notes: { product: product.slug },
      }),
    });

    if (!res.ok) {
      console.error("Razorpay order failed", await res.text());
      return Response.json({ error: "Could not start checkout." }, { status: 502 });
    }

    const order = await res.json();
    return Response.json({
      gateway: "razorpay",
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
      name: product.name,
    });
  }

  if (!product.priceUsd) {
    return Response.json(
      { error: "International checkout isn't available for this product yet." },
      { status: 400 },
    );
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return Response.json({ error: "Payments are not configured yet." }, { status: 503 });
  }

  const form = new URLSearchParams({
    mode: "payment",
    success_url: `${origin}/${product.slug}?purchase=success`,
    cancel_url: `${origin}/${product.slug}?purchase=cancelled`,
    "line_items[0][quantity]": "1",
    "line_items[0][price_data][currency]": "usd",
    "line_items[0][price_data][unit_amount]": String(product.priceUsd * 100),
    "line_items[0][price_data][product_data][name]": product.name,
    "line_items[0][price_data][product_data][description]": product.shortDescription,
    "metadata[product]": product.slug,
  });

  const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${stripeKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form,
  });

  if (!res.ok) {
    console.error("Stripe session failed", await res.text());
    return Response.json({ error: "Could not start checkout." }, { status: 502 });
  }

  const session = await res.json();
  return Response.json({ gateway: "stripe", url: session.url });
}

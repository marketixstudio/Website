import {
  BarChart3,
  Calculator,
  Link2,
  MessageSquareQuote,
  QrCode,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";
import type { ToolContent, OverviewContent } from "@/lib/content-types";

export const toolsOverview: OverviewContent = {
  eyebrow: "Free Tools",
  title: "Free tools we built because",
  highlight: "we needed them ourselves",
  subtitle:
    "No signup wall, no email gate. These are the calculators and generators our own team uses on client accounts every week.",
  metaTitle: "Free Marketing Tools | Calculators & Generators",
  metaDescription:
    "Free marketing tools from Marketix Studio: ROAS calculator, ad budget planner, UTM builder and an AI Google review generator for local businesses.",
  cardsTitle: "Pick a tool",
  cards: [
    { label: "AI Review Generator", href: "/tools/review-generator", body: "Help happy customers write a Google review in seconds.", icon: MessageSquareQuote },
    { label: "Google Maps Ranking Toolkit", href: "/gmb-toolkit", body: "The checklist and templates we use to win the local 3-pack.", icon: Star },
    { label: "ROAS Calculator", href: "/tools/roas-calculator", body: "Find the break-even ROAS your margin actually requires.", icon: TrendingUp },
    { label: "Ad Budget Calculator", href: "/tools/ad-budget-calculator", body: "Work out the spend needed to hit a lead target.", icon: Calculator },
    { label: "UTM Builder", href: "/tools/utm-builder", body: "Build clean, consistent campaign tracking links.", icon: Link2 },
  ],
  faqs: [
    { q: "Are these tools really free?", a: "Yes. No signup, no email capture, no trial. They run entirely in your browser and we do not store what you enter." },
    { q: "Why give them away?", a: "Because they are genuinely useful and they demonstrate how we think. If you decide you would rather someone ran this for you, you know where we are." },
  ],
};

export const tools: Record<string, ToolContent> = {
  "review-generator": {
    slug: "review-generator",
    name: "AI Review Generator",
    tagline: "Turn happy customers into Google reviews",
    subtitle:
      "Most satisfied customers would happily leave a review. They just do not want to sit there composing one. This removes that friction in about fifteen seconds.",
    metaTitle: "AI Google Review Generator for Local Businesses",
    metaDescription:
      "A branded review page that helps your happy customers write a genuine Google review in seconds. Increase review volume without breaking Google's policies.",
    widget: "review-demo",
    answerBlock: {
      question: "Is it against Google's policy to help customers write reviews?",
      answer:
        "Helping a genuine customer articulate their own experience is permitted. What Google prohibits is fake reviews, reviews from non-customers, incentivised reviews and review gating: filtering out unhappy customers. A compliant tool drafts from the customer's own input, lets them edit freely, and sends everyone to the same review link regardless of rating.",
      keyFacts: [
        "Google prohibits incentivised, fake and gated reviews",
        "Customers must post in their own words and be able to edit freely",
        "Every rating should reach the same review link, with no filtering by score",
        "Review recency and volume both influence local map pack ranking",
      ],
    },
    howItWorks: [
      { title: "Customer scans or taps", body: "A QR code on the counter, invoice or a WhatsApp link takes them to your branded page." },
      { title: "They pick and describe", body: "Star rating, the service they used, and a few words about how it went." },
      { title: "A draft appears", body: "The tool turns their input into a natural review they can edit however they like." },
      { title: "One tap to post", body: "Copy and go straight to your Google review form. They post it themselves, in their own words." },
    ],
    features: [
      { icon: Sparkles, title: "Drafts from their words", body: "The review is built from what the customer actually told you, not from a template library." },
      { icon: ShieldCheck, title: "Policy-compliant by design", body: "No gating, no incentives, no auto-posting. The customer reads, edits and submits it themselves." },
      { icon: QrCode, title: "QR code and WhatsApp ready", body: "Print it for the counter or send it after a job. Both flows are supported." },
      { icon: Zap, title: "Branded to you", body: "Your logo, your colours, your service list. It looks like your business, not like a tool." },
      { icon: Star, title: "Works on any phone", body: "Loads in under two seconds on mobile data, which is where every single customer will open it." },
      { icon: BarChart3, title: "Feeds your local SEO", body: "Steady, recent reviews are one of the strongest signals for map pack ranking." },
    ],
    faqs: [
      { q: "Does this create fake reviews?", a: "No, and we would not build it if it did. The customer supplies the rating and the experience in their own words, the tool helps phrase it, and the customer edits and posts it themselves. Nothing is submitted on their behalf and nobody who has not used your business is invited to review." },
      { q: "Can we hide bad reviews?", a: "No. Review gating, meaning routing unhappy customers away from the review form, explicitly breaches Google's policies and risks your profile. Every customer reaches the same link regardless of rating. If you are worried about what people would say, that is a service problem rather than a marketing one." },
      { q: "How do we get it for our business?", a: "We set it up as part of a local SEO engagement, or as a standalone build. You provide your logo, brand colour, service list and Google review link, and it goes live at a branded URL within a couple of days." },
      { q: "How many more reviews should we expect?", a: "It varies with how many customers you actually ask. Businesses that put the QR code in front of every customer typically see three to five times their previous review rate, largely because the effort barrier drops from several minutes to a few seconds." },
    ],
    relatedServices: [
      { label: "Local SEO & Google Business", href: "/services/local-seo-gmb" },
      { label: "SEO Services", href: "/services/seo-services" },
    ],
  },

  "roas-calculator": {
    slug: "roas-calculator",
    name: "ROAS Calculator",
    tagline: "Find the return on ad spend your margin actually needs",
    subtitle:
      "A 3x ROAS is excellent for one business and bankrupting for another. This works out your real break-even from your own numbers.",
    metaTitle: "Free ROAS Calculator | Break-Even Return on Ad Spend",
    metaDescription:
      "Calculate your break-even ROAS from gross margin, shipping and return rate. Free calculator, no signup required.",
    widget: "roas",
    answerBlock: {
      question: "How do you calculate break-even ROAS?",
      answer:
        "Break-even ROAS equals 1 divided by your gross margin expressed as a decimal. A business with a 40 percent gross margin needs 1 divided by 0.40, or 2.5x ROAS, simply to cover costs. Subtracting shipping, returns and payment fees from margin first gives a more honest figure.",
      keyFacts: [
        "Break-even ROAS = 1 ÷ gross margin percentage",
        "A 40% margin business breaks even at 2.5x ROAS",
        "Shipping, returns and payment fees should be deducted from margin first",
        "Target ROAS should sit meaningfully above break-even to produce profit",
      ],
    },
    howItWorks: [
      { title: "Enter your price and cost", body: "Average order value and the cost of goods sold for that order." },
      { title: "Add the leaks", body: "Shipping, expected return rate and payment gateway fees." },
      { title: "See break-even", body: "The exact ROAS at which you stop losing money on acquisition." },
      { title: "Set a target", body: "Choose a profit margin and the tool shows the ROAS required to hit it." },
    ],
    features: [
      { icon: Calculator, title: "True margin, not gross", body: "Accounts for shipping, returns and fees, which is where most ROAS maths goes wrong." },
      { icon: Target, title: "Target ROAS output", body: "Tells you what to actually set as a campaign goal, not just where you break even." },
      { icon: Wallet, title: "Works in any currency", body: "The maths is currency-agnostic: enter your own numbers." },
      { icon: ShieldCheck, title: "Nothing leaves your browser", body: "Calculations run client-side. We never see your margins." },
    ],
    faqs: [
      { q: "Should I use gross margin or contribution margin?", a: "Contribution margin, which is gross margin minus the variable costs of fulfilling the order. Using gross margin alone consistently makes campaigns look more profitable than they are." },
      { q: "What about repeat purchases?", a: "This calculator covers first-order break-even, which is the conservative view. If you have reliable repeat purchase data you can justify a lower first-order ROAS, but only if the repeat rate is genuinely proven rather than hoped for." },
      { q: "Why is my platform-reported ROAS higher than reality?", a: "Attribution windows. A 7-day-click, 1-day-view window credits the platform with sales it may only have influenced lightly. Comparing platform ROAS against blended ROAS (total revenue divided by total spend) usually reveals the gap." },
    ],
    relatedServices: [
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Google Ads & PPC", href: "/services/google-ads-ppc" },
    ],
  },

  "ad-budget-calculator": {
    slug: "ad-budget-calculator",
    name: "Ad Budget Calculator",
    tagline: "Work out the spend a lead target actually requires",
    subtitle:
      "Before you commit to a monthly number, check whether it can mathematically produce the leads you need.",
    metaTitle: "Free Ad Budget Calculator | Plan Spend by Lead Target",
    metaDescription:
      "Calculate the monthly ad budget needed to hit a lead or sales target based on cost per click and conversion rate. Free, no signup.",
    widget: "ad-budget",
    answerBlock: {
      question: "How much should I spend on ads each month?",
      answer:
        "Required monthly budget equals your target number of leads divided by your landing page conversion rate, multiplied by your average cost per click. A target of 50 leads at a 5 percent conversion rate and ₹40 per click requires roughly ₹40,000 per month, before any allowance for testing.",
      keyFacts: [
        "Budget = (target leads ÷ conversion rate) × cost per click",
        "Add 20-30% on top for creative and audience testing",
        "Budget below the platform learning threshold produces unstable results",
        "Improving conversion rate reduces required budget proportionally",
      ],
    },
    howItWorks: [
      { title: "Set the target", body: "How many leads or sales you need each month." },
      { title: "Add your benchmarks", body: "Expected cost per click and landing page conversion rate." },
      { title: "See the requirement", body: "The monthly spend that target mathematically implies." },
      { title: "Test the levers", body: "Adjust conversion rate to see how much budget better pages would save." },
    ],
    features: [
      { icon: Calculator, title: "Reverse-engineered from goals", body: "Starts from the outcome you need rather than the budget you happen to have." },
      { icon: TrendingUp, title: "Shows the CRO upside", body: "Makes it obvious how much cheaper a better landing page would make everything." },
      { icon: Target, title: "Includes a testing allowance", body: "Adds realistic headroom for the experimentation that any new account needs." },
      { icon: ShieldCheck, title: "Runs in your browser", body: "No data sent anywhere, no signup, no email capture." },
    ],
    faqs: [
      { q: "What if I do not know my cost per click?", a: "Use Google's Keyword Planner for a search estimate, or start from category benchmarks. In India, search CPCs commonly run ₹15-80 depending on competitiveness, with real estate and education at the higher end." },
      { q: "Is there a minimum budget that makes sense?", a: "Below roughly ₹30,000 per month in India, campaigns rarely gather enough conversion data for the platform algorithms to optimise properly. You can run smaller, but expect noisier and less reliable results." },
      { q: "Should I split budget across Google and Meta?", a: "Usually not at the start. Concentrating spend on one channel until it reaches stable performance produces cleaner learning than splitting a small budget across two platforms that each stay below the learning threshold." },
    ],
    relatedServices: [
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "Landing Pages & Funnels", href: "/services/landing-pages-funnels" },
    ],
  },

  "utm-builder": {
    slug: "utm-builder",
    name: "UTM Builder",
    tagline: "Campaign links that do not break your reporting",
    subtitle:
      "Inconsistent UTM tags are why your analytics shows 'facebook', 'Facebook' and 'FB' as three different sources. This enforces one convention.",
    metaTitle: "Free UTM Builder | Campaign URL Tag Generator",
    metaDescription:
      "Build consistent, lowercase UTM-tagged campaign URLs for GA4. Free UTM link builder with naming conventions enforced.",
    widget: "utm",
    answerBlock: {
      question: "What are UTM parameters and why do they matter?",
      answer:
        "UTM parameters are tags appended to a URL that tell analytics tools where a visitor came from. The five standard parameters are source, medium, campaign, term and content. They matter because without consistent tagging, analytics cannot separate paid from organic traffic or attribute conversions to the right campaign.",
      keyFacts: [
        "utm_source, utm_medium and utm_campaign are the three essential parameters",
        "UTM values are case-sensitive, so inconsistent casing splits your data",
        "Never apply UTM tags to internal links, because it resets the session source",
        "GA4 also reads utm_source_platform and utm_creative_format",
      ],
    },
    howItWorks: [
      { title: "Paste the destination", body: "The page you want the campaign to land on." },
      { title: "Fill the parameters", body: "Source, medium and campaign, with term and content if you need them." },
      { title: "Get a clean link", body: "Automatically lowercased and hyphenated so casing never splits your reporting." },
      { title: "Copy and ship", body: "One tap to copy, ready for the ad platform or the email." },
    ],
    features: [
      { icon: Link2, title: "Enforces one convention", body: "Lowercase and hyphenated by default, which eliminates the most common tagging error." },
      { icon: ShieldCheck, title: "Warns on internal links", body: "Flags the mistake of UTM-tagging links within your own site." },
      { icon: Zap, title: "Common presets included", body: "Standard source and medium pairs for Google, Meta, LinkedIn and email." },
      { icon: BarChart3, title: "GA4-ready", body: "Outputs parameters exactly as GA4 expects to receive them." },
    ],
    faqs: [
      { q: "Do UTM parameters hurt SEO?", a: "Not on ad and email links, which is where they belong. Avoid tagging internal navigation links, because that both resets session attribution and creates duplicate URLs that can waste crawl budget." },
      { q: "What is the difference between source and medium?", a: "Source is where the traffic came from: google, facebook, newsletter. Medium is the type of traffic: cpc, organic, email, social. Source answers 'which site' and medium answers 'what kind of link'." },
      { q: "Should I use UTMs on Google Ads?", a: "Use auto-tagging with the gclid parameter instead, which passes richer data into GA4. Adding manual UTMs on top can override auto-tagging and actually reduce the detail available to you." },
    ],
    relatedServices: [
      { label: "Conversion Rate Optimisation", href: "/services/conversion-rate-optimisation" },
      { label: "Performance Marketing", href: "/services/performance-marketing" },
    ],
  },
};

export const toolList = Object.values(tools);
export const toolSlugs = Object.keys(tools);

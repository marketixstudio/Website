import { cookies } from "next/headers";
import { SESSION_COOKIE } from "@/lib/admin-auth";

/** POST only, so a link preview or prefetch can't sign anyone out. */
export function POST(request: Request) {
  cookies().delete(SESSION_COOKIE);
  return Response.redirect(new URL("/r/login", request.url), 303);
}

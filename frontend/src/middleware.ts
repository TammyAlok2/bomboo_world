import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PROTECTED_ROUTES, PUBLIC_ROUTES } from "@/lib/routeConfig";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Check if cookies have token (fallback for server-side token if needed)
  const token = request.cookies.get("token")?.value;

  // Check if route is protected
  const isProtected = PROTECTED_ROUTES.some(
    (route) => path === route || path.startsWith(route + "/")
  );

  // If protected route and no token, allow frontend to handle (client-side check will redirect)
  // This is a safety net in case client-side check fails
  if (isProtected && !token) {
    // Let it pass - client-side RouteGuard will handle the redirect
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all public paths and their sub-paths
    "/signin/:path*",
    "/signup/:path*",
    "/forget/:path*",

    "/cart/:path*",

    // Also match the exact paths
    "/signin",
    "/signup",
    "/forget",
    "/cart",

    // Match all protected paths and their sub-paths
    "/checkout/:path*",
    "/dashboard/:path*",
    "/cart/checkout/:path*",
    "/dashboard/wishlist",

    // Also match the exact protected paths
    "/checkout",
    "/dashboard",
    "/cart/checkout",
  ],
};

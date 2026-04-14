// Public routes - accessible without login
export const PUBLIC_ROUTES = [
  "/",
  "/signin",
  "/signup",
  "/forget",
  "/allproducts",
  "/blog",
  "/about",
  "/support",
  "/singleproduct"
];

// Protected routes - require login
export const PROTECTED_ROUTES = [
  "/checkout",
  "/dashboard",
  "/cart/checkout",
  "/profile",
  "/wishlist",
];

export const isPublicRoute = (pathname: string): boolean => {
  return PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );
};

export const isProtectedRoute = (pathname: string): boolean => {
  return PROTECTED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );
};

// Import the Clerk middleware for Next.js
import { clerkMiddleware } from "@clerk/nextjs/server";

// Export the Clerk middleware as the default export
export default clerkMiddleware();

// Configuration for the middleware
export const config = {
  // Define which routes the middleware should run on
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    // This complex regex matches most routes except for static files and Next.js internal routes
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run the middleware for API routes and tRPC routes
    '/(api|trpc)(.*)',
  ],
};

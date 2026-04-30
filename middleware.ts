import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Add auth redirects after Supabase auth is fully wired.
  return NextResponse.next({
    request
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};


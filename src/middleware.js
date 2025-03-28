import { NextResponse } from 'next/server';

export function middleware(request) {
  // Set correct content type for sitemap.xml
  if (request.nextUrl.pathname === '/sitemap.xml') {
    const response = NextResponse.next();
    response.headers.set('Content-Type', 'application/xml');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/sitemap.xml'],
};
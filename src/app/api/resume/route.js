import { NextResponse } from 'next/server';
import resumeData from '@/data/resume.json';

// Explicitly set to force-dynamic to ensure we don't cache
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(resumeData);
}
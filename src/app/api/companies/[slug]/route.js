import { NextResponse } from 'next/server';
import resumeData from '@/data/resume.json';

// Explicitly set to force-dynamic to ensure we don't cache
export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
    const { slug } = await params;

    // Find the company that matches the slug from workExperience array
    const company = resumeData.workExperience.find(
        company => company.slug === slug
    );

    if (company) {
        return NextResponse.json(company);
    } else {
        return NextResponse.json(
            { error: `Company with slug '${slug}' not found` },
            { status: 404 }
        );
    }
}



import { Suspense } from 'react';
import CompanyPageClient from './client-component';
import { generateSeoMetadata } from '@/lib/seo-utils';

export async function generateMetadata({ params }) {
    // Fetch the company data on the server
    const { company } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/companies/${company}`);
    const companyData = await res.json();

    return generateSeoMetadata({
        title: `${companyData.company} | ${companyData.role} - Mark Tellez`,
        description: `My experience working at ${companyData.company} as ${companyData.role} from ${companyData.from} to ${companyData.to}.`,
        keywords: ["professional experience", companyData.company, companyData.role, "career history", "work experience"],
        url: `https://marktellez.com/companies-ive-worked-for/${company}`,
        type: "article",
        siteName: "Mark Tellez - Expert Programmer and AI Engineer"
    });
}

export default async function CompanyPage({ params, searchParams }) {
    // Fetch data on the server
    const { company } = await params;
    const awaitedSearchParams = await searchParams;
    const referrer = awaitedSearchParams.referrer;
    const cardId = awaitedSearchParams.cardId;

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/companies/${company}`);
    const companyData = await res.json();

    return (
        <Suspense fallback={<div className="container mx-auto py-8 text-center">Loading...</div>}>
            <CompanyPageClient
                initialCompanyData={companyData}
                params={params}
                referrer={referrer}
                cardId={cardId}
            />
        </Suspense>
    );
}

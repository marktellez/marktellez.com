import TestimonialsClient from './client-component';
import { generateSeoMetadata } from '@/lib/seo-utils';

export const metadata = generateSeoMetadata({
  title: "Testimonials - Expert Programmer and AI Engineer",
  description: "Read what clients and colleagues say about working with me - testimonials from people I've helped over the years.",
  keywords: ["developer testimonials", "programming testimonials", "client reviews", "software engineer reviews", "ai engineer testimonials"],
  url: "https://marktellez.com/testimonials",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}

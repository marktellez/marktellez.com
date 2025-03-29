
import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '@/ui/cta-button';
import AwardWinner from '@/ui/award-winner';
import Codementor from '@/ui/codementor';

import { generateSeoMetadata } from '@/lib/seo-utils';

export const metadata = generateSeoMetadata({
  title: "Why Hire Me - Expert Programmer and AI Engineer",
  description: "Discover why American companies should work with me - award-winning technical skills, U.S. LLC structure, convenient timezone, and cost-effective expertise.",
  keywords: ["hire programmer", "hire web developer", "hire ai developer", "hire machine learning expert", "hire senior engineer", "hire technical consultant", "expert developer", "senior engineer", "cost-effective developer"],
  url: "https://marktellez.com/why-hire-me",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function WhyHireMePage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Why American Companies Should Work With Me</h1>

        <p className="text-gray-300">
          I offer exceptional value to American companies (as well as the rest of the world!) seeking top-tier software development talent without the associated costs and complexities of traditional hiring or dealing with troublesome Visas and burdensome taxes.
        </p>

        <div className="border-b border-white/50 my-12"></div>

        <div className="mb-10">
          <h2 className="mt-8 text-white">Award-Winning Technical Skills</h2>
          <AwardWinner />
        </div>

        <div className="mb-10">
          <h2 className="mt-8 text-white">Proven Mentorship & Problem-Solving</h2>
          <Codementor />
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <section>
          <h2 className="mt-8 text-white">U.S. LLC Structure & Convenient Timezone</h2>
          <div className="flex flex-col md:flex-row gap-6 my-6">
            <div className="flex-1">
              <h3 className="mt-4 text-white">U.S. LLC Structure</h3>
              <p className="text-gray-300">
                I operate through a U.S.-based LLC, making it straightforward for American companies to hire me. This arrangement simplifies contracts, invoicing, and tax considerations—no international payment complications or tax headaches.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="mt-4 text-white">Convenient Timezone</h3>
              <p className="text-gray-300">
                Based in Mexico City, I work in a timezone that aligns perfectly with U.S. business hours. This means real-time collaboration with your team, immediate responses, and no delays waiting for overseas contractors to start their day.
              </p>
            </div>
          </div>
        </section>

        <div className="border-b border-white/50 my-12"></div>

        <section>
          <h2 className="mt-8 text-white">Direct Experience & Integrity</h2>
          <p className="text-gray-300">
            I worked in the U.S. for years and understand the work culture, expectations, and high standards required. This experience gives me unique insight into what American companies need and expect from their technical talent.
          </p>
          <p className="text-gray-300 mt-4">
            I self-deported because I believe in following the law—my integrity is non-negotiable. This same principle guides my work: I deliver what I promise, maintain transparency, and uphold the highest ethical standards.
          </p>
        </section>

        <div className="border-b border-white/50 my-12"></div>

        <section>
          <h2 className="mt-8 text-white">Cost-Effective Expertise</h2>
          <p className="text-gray-300">
            I offer superior skills compared to 99% of American-based hires, at a fraction of the cost when you include benefits and employment costs. With professional experience dating back to 1997, my extensive work with companies like <Link href="/companies-ive-worked-for/intel" className="hover:text-blue-400 transition-colors">Intel</Link>, <Link href="/companies-ive-worked-for/x" className="hover:text-blue-400 transition-colors">X</Link>, and <Link href="/companies-ive-worked-for/uber" className="hover:text-blue-400 transition-colors">Uber</Link> demonstrates my ability to deliver at the highest levels.
          </p>
          <p className="text-gray-300 mt-4">
            You don't have to worry about benefits, office space, or overhead—just pay for results. This arrangement eliminates the substantial costs associated with full-time employees while providing access to elite, senior-level expertise with over 25 years of professional experience.
          </p>
        </section>

        <div className="border-b border-white/50 my-12"></div>

        <section>
          <h2 className="mt-8 text-white">Transparent Productivity & Work Ethic</h2>
          <p className="text-gray-300">
            I propose a setup where a laptop at a desk in your office shows my screen, live, via Zoom or Teams. This transparency ensures you can see exactly what I'm working on and how I'm progressing.
          </p>

          <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
            <div className="flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 text-center">Virtual "In-Office" Presence</h3>

              <div className="w-full mb-6">
                <Image
                  src="/in-house.png"
                  alt="Virtual in-office presence"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-lg shadow-md w-full h-auto"
                  priority
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <p className="text-lg text-white leading-relaxed">
                I offer a simple, transparent solution for remote work: provide a laptop with screen sharing software, and I'll be visibly working each morning—camera on, fully engaged, delivering consistent productivity.
              </p>



              <p className="text-gray-300 mt-4">
                You'll see that I'm working harder, longer, and delivering more than my American counterparts. My dedication to excellence and efficiency means you get more value for your investment. It's my promise to you!
              </p>

            </div>
          </div>


        </section>

        <div className="border-b border-white/50 my-12"></div>

        <section>
          <h2 className="mt-8 text-white">Seamless Integration & Availability</h2>
          <p className="text-gray-300">
            I work in your time zone and can be available whenever you need. This eliminates the communication delays and scheduling challenges often associated with offshore contractors.
          </p>
          <p className="text-gray-300 mt-4">
            I integrate smoothly with your team using the same tools and workflows. My experience with diverse development environments means I can adapt quickly to your specific processes and technologies.
          </p>
        </section>

        <div className="border-b border-white/50 my-12"></div>

        <section>
          <h2 className="mt-8 text-white">Risk-Free Trial</h2>
          <p className="text-gray-300">
            Give me a short contract to prove my value—if you're not happy, no obligation to continue. This trial period allows you to evaluate my skills, work ethic, and fit with your team before making a longer-term commitment.
          </p>
        </section>

        <div className="mt-8">
          <CTAButton href="/contact" color="green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
            <span>CONTACT ME NOW</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

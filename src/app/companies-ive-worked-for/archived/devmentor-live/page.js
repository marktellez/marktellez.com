import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

export default function DevmentorLivePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">DevmentorLive</h1>

        <div className="flex items-center text-gray-400 mb-8">
          <span className="mr-4">2020 - 2022</span>
          <span className="mr-4">•</span>
          <span>Founder & Consultant</span>
          <span className="mx-4">•</span>
          <Link
            href="https://devmentor.live"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors inline-flex items-center gap-2"
          >
            <span>devmentor.live</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300">
            DevmentorLive was my consulting company that I founded after leaving Codementor. During this period, I balanced
            professional software development with building my house and farm, where I raise sheep, chickens, and grow crops.
          </p>

          <p>I also built a Biogas bladder system for cooking from a blueprint online and all my power is Solar, including my development machine and my "AI Box" where I run 2 RTX 4090s for local model development and hosting.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Technical Focus</h2>
          <p className="text-gray-300">
            I primarily worked with technologies I had mastered over the years: ReactJS, TypeScript, JavaScript, NextJS,
            TailwindCSS, and MongoDB. This expertise allowed me to efficiently deliver high-quality solutions for a diverse
            range of clients.
          </p>

          <p className="text-gray-300 mt-4">
            Simultaneously, I began exploring machine learning more deeply, developing agent models capable of playing
            classic arcade games and board games like Connect Four and Chinese Checkers.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Medical AI Research in Mexico</h2>
          <p className="text-gray-300">
            During my time at DevmentorLive, I conducted significant research in medical diagnostics here in Mexico. I worked with labeled datasets of chest and brain X-rays, along with blood and hormone markers to train sophisticated diagnostic models using CNNs and Transformers.
          </p>

          <p className="text-gray-300 mt-4">
            My models achieved remarkable accuracy, outperforming several published papers from 2018 and 2019. This period marked my deeper dive into replicating and improving upon scientific papers in machine learning, with a particular focus on Supervised Learning techniques.
          </p>

          <p className="text-gray-300 mt-4">
            I also developed a Text-To-Speech model using GANs and Transformer architectures to replicate human speech with exceptional fidelity. This project involved building comprehensive datasets and fine-tuning the models to achieve natural-sounding voice synthesis, laying the groundwork for my later work at VoxBirdAI.
          </p>

          <div className="bg-gray-900/40 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-white mb-4">Key Projects</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Escape room booking application</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Multiple e-commerce platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">CRM applications for small businesses</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Machine learning game-playing agents</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Continued Mentorship</h2>
          <p className="text-gray-300">
            While running my consulting business, I maintained the mentoring relationships I had established during my time
            at Codementor. This allowed me to continue sharing knowledge and supporting developers in their growth journeys.
          </p>

          <p className="text-gray-300 mt-4">
            However, as AI technologies became increasingly capable, I observed a declining interest in traditional programming
            mentorship. This shift in the industry landscape prompted me to consider new opportunities.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Rural Tech Balance</h2>
          <p className="text-gray-300">
            This period represented a unique balance between cutting-edge technology work and rural living. Building a house for my wife and I, with my own hands,
            and developing a small farm with livestock and crops provided a complementary counterpoint to the digital nature
            of my consulting work.
          </p>

          <p className="text-gray-300 mt-4">
            Eventually, I decided to explore new opportunities in the startup world, which led me to join Zooly and transition
            away from independent consulting.
          </p>
        </div>

        <div className="mt-12">
          <CTAButton href="/contact" color="green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            <span>CONTACT ME</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

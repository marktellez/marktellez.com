import Link from 'next/link';

export default function Codementor() {
  return (
    <div className="bg-gradient-to-r from-blue-900/30 to-indigo-700/30 p-6 rounded-lg border border-blue-500/30 shadow-lg text-center">
      <div className="flex flex-col items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-2">Top-Rated Codementor</h3>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <div className="flex items-center">
              <span className="text-yellow-400 text-2xl font-bold">5.0</span>
              <div className="flex ml-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>

            <span className="text-white font-bold">454 reviews</span>
          </div>

          <p className="text-gray-300 mb-4">
            For 4 years, I served as a trusted mentor on Codementor, helping developers solve complex problems and advance their careers. My perfect 5-star rating reflects my commitment to clear communication, effective problem-solving, and exceptional teaching.
          </p>

          <p className="text-blue-300 mb-4 font-medium">
            Specializing in React, Rails, JavaScript, and complex debugging sessions, I've helped hundreds of developers overcome technical challenges and grow their skills.
          </p>

          <div className="flex justify-center space-x-4">


            <Link
              href="https://www.codementor.io/@marktellez"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors no-underline"
            >
              <span>Codementor Profile</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
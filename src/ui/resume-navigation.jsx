'use client';



export default function ResumeNavigation() {
  const smoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm py-3 px-2 sm:px-4 rounded-lg mb-8 shadow-lg border border-gray-800/50 overflow-x-auto">
      <div className="flex justify-center space-x-3 sm:space-x-6 text-xs sm:text-sm font-medium min-w-max mx-auto">
        <a
          href="#skills"
          onClick={(e) => smoothScroll(e, 'skills')}
          className="text-blue-400 hover:text-blue-300 transition-colors px-2 sm:px-3 py-1 rounded-md hover:bg-blue-900/20 whitespace-nowrap"
        >
          Skills
        </a>
        <a
          href="#employment"
          onClick={(e) => smoothScroll(e, 'employment')}
          className="text-blue-400 hover:text-blue-300 transition-colors px-2 sm:px-3 py-1 rounded-md hover:bg-blue-900/20 whitespace-nowrap"
        >
          Employment
        </a>
        <a
          href="#testimonials"
          onClick={(e) => smoothScroll(e, 'testimonials')}
          className="text-blue-400 hover:text-blue-300 transition-colors px-2 sm:px-3 py-1 rounded-md hover:bg-blue-900/20 whitespace-nowrap"
        >
          Testimonials
        </a>
        <a
          href="/mark-tellez-sr-software-engineer-ai-engineer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors px-2 sm:px-3 py-1 rounded-md hover:bg-blue-900/20 flex items-center whitespace-nowrap"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          PDF
        </a>
      </div>
    </div>
  );
}

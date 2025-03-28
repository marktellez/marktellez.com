import Link from 'next/link';
import Pill from '@/ui/pill';

async function getResumeData() {
  const baseUrl = process.env.NEXT_PUBLIC_URL

  const res = await fetch(`${baseUrl}/api/resume`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch resume data');
  }

  return res.json();
}

export default async function ResumePage() {
  const resumeData = await getResumeData();

  // Define the main categories we want to display in order
  const mainCategories = [
    'Web Development',
    'AI & Machine Learning',
    'Databases',
    'Tools'
  ];

  // Group skills by category
  const skillsByCategory = resumeData.skills.reduce((acc, skill) => {
    let category = skill.category;

    // Ensure the category is one of our main categories
    if (!mainCategories.includes(category)) {
      category = 'Tools'; // Default fallback
    }

    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">My Resume</h1>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-700">Skills & Expertise</h2>

        <div className="space-y-8">
          {mainCategories.map((category) => {
            // Skip categories that don't have any skills
            if (!skillsByCategory[category] || skillsByCategory[category].length === 0) {
              return null;
            }

            return (
              <div key={category} className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillsByCategory[category].map((skill, index) => (
                    <Pill
                      key={index}
                      href={skill.url}
                      color="blue"
                    >
                      {skill.name}
                    </Pill>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-700">Work Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.companies.map((company, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:translate-y-[-4px] border border-gray-700/50"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{company.company}</h3>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-900/30 text-blue-300">
                    {company.from} - {company.to}
                  </span>
                </div>

                <div className="text-lg font-medium text-blue-400 mb-4">{company.title}</div>

                {company.highlights && company.highlights.length > 0 && (
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {company.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 pt-4 border-t border-gray-700/50">
                  <Link
                    href={company.url}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center"
                  >
                    Visit website
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-blue-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Get in Touch
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

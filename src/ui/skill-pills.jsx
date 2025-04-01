import Pill from '@/ui/pill';
import skillsData from '@/data/skills.json';
import skillPagesData from '@/data/skill-pages.json';

export default function SkillPills({ className = "" }) {
  // Define available colors to cycle through
  const colors = ['green', 'purple', 'teal', 'orange'];

  // Function to get color based on index
  const getCategoryColor = (index) => colors[index % colors.length];

  // Function to convert skill name to slug
  const getSkillSlug = (skill) => {
    // Special case for C#
    if (skill.toLowerCase() === 'c#') return 'c-sharp';

    // Regular slug conversion for other skills
    return skill.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/\./g, '-')
      .replace(/#/g, 'sharp');
  };

  return (
    <div className={`flex flex-col w-full gap-4 border border-white/10 p-4 md:p-6 rounded-lg ${className}`}>
      {Object.entries(skillsData).map(([category, skills], categoryIndex) => {
        if (skills.length === 0) return null;

        // Sort skills: enabled first, then disabled
        const sortedSkills = [...skills].sort((a, b) => {
          const aSlug = getSkillSlug(a);
          const bSlug = getSkillSlug(b);

          const aHasPage = skillPagesData?.[aSlug]?.hasPage === true;
          const bHasPage = skillPagesData?.[bSlug]?.hasPage === true;

          // If a has a page and b doesn't, a comes first (-1)
          // If b has a page and a doesn't, b comes first (1)
          // If both have pages or both don't, keep original order (0)
          if (aHasPage && !bHasPage) return -1;
          if (!aHasPage && bHasPage) return 1;
          return 0;
        });

        return (
          <div key={category} className="flex flex-wrap gap-2 md:gap-3 justify-center my-4">
            <span className="w-full text-center text-sm text-white/70 mb-1">{category}:</span>
            {sortedSkills.map((skill, index) => {
              const skillSlug = getSkillSlug(skill);
              const hasPage = skillPagesData?.[skillSlug]?.hasPage === true;

              return (
                <Pill
                  key={index}
                  href={hasPage ? `/i-know/${skillSlug}` : '#'}
                  color={getCategoryColor(categoryIndex)}
                  disabled={!hasPage}
                >
                  {skill}
                </Pill>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

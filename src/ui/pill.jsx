import Link from 'next/link';

export default function Pill({ children, href, color = "blue", disabled = false }) {
  const gradientClasses = {
    green: "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600",
    purple: "bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600",
    teal: "bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600",
    orange: "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600",
    blue: "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600",
  };

  const gradientClass = gradientClasses[color] || gradientClasses.blue;

  // If disabled or href is '#', render a non-clickable span
  if (disabled || href === '#') {
    return (
      <span className={`inline-block px-3 py-1 rounded-full ${gradientClass} opacity-80 text-white text-sm font-medium cursor-not-allowed`}>
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className="no-underline hover:no-underline">
      <span className={`inline-block px-3 py-1 rounded-full ${gradientClass} text-white text-sm font-medium transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:scale-110 hover:bg-transparent`}>
        {children}
      </span>
    </Link>
  );
}

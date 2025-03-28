"use client"

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function CTAButton({ href, children, className = "" }) {
  // Get the current path to use as referrer
  const pathname = usePathname();

  // Construct the href with referrer query parameter
  const hrefWithReferrer = href.includes('?')
    ? `${href}&referrer=${encodeURIComponent(pathname)}`
    : `${href}?referrer=${encodeURIComponent(pathname)}`;

  // Fixed green color styling
  const colorClasses = {
    default: "text-green-500 border-green-500",
    hover: "hover:bg-green-500 hover:border-green-600 hover:text-white"
  };

  // Clone children to ensure they inherit the correct color
  const coloredChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      // For SVG elements, ensure they inherit the current color
      if (child.type === 'svg') {
        return React.cloneElement(child, {
          className: `${child.props.className} current-color`,
        });
      }
    }
    return child;
  });

  return (
    <Link
      href={hrefWithReferrer}
      className={`w-full block border-2 rounded-lg px-6 py-3 transition-all duration-300 
        ${colorClasses.default} ${colorClasses.hover} hover:shadow-lg 
        hover:scale-[1.02] hover:translate-y-[-2px] cursor-pointer ${className}`}
    >
      <div className="flex items-center justify-center gap-2 font-serif text-lg font-semibold">
        {coloredChildren}
      </div>
    </Link>
  );
}

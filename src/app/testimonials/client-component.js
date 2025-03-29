"use client";

import { useState, useEffect } from 'react';
import featured from '@/data/featured.json';
import reviews from '@/data/reviews.json';

export default function TestimonialsClient() {
  const [visibleReviews, setVisibleReviews] = useState(6);

  // Sort reviews by content length (longest first)
  const sortedReviews = [...reviews].sort((a, b) =>
    (b.content?.length || 0) - (a.content?.length || 0)
  );

  const loadMoreReviews = () => {
    setVisibleReviews(prev => Math.min(prev + 3, sortedReviews.length));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
        visibleReviews < sortedReviews.length) {
        loadMoreReviews();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleReviews, sortedReviews.length]);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">People I have Helped over the Years</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((item, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-lg">
              <p className="italic mb-4">{item.content || item.text}</p>
              <div className="flex items-center">
                {item.writer?.avatar_url && (
                  <img
                    src={item.writer.avatar_url}
                    alt={item.writer.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                )}
                <div>
                  <p className="font-semibold">{item.writer?.name || item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Client Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedReviews.slice(0, visibleReviews).map((item, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-lg">
              <p className="italic mb-4">{item.content}</p>
              <div className="flex items-center">
                {item.writer?.avatar_url && (
                  <img
                    src={item.writer.avatar_url}
                    alt={item.writer.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                )}
                <div>
                  <p className="font-semibold">{item.writer.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleReviews < sortedReviews.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreReviews}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
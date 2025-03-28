import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';
import PhotoWall from '@/ui/photo-wall';

export default function PhotoshopSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Photoshop: Artistic Vision Beyond Cyberspace</h1>

        <p className="text-gray-300">My journey with Photoshop spans many years as a photographer and digital artist, creating works that extend beyond the digital realm. This experience has given me a unique perspective that combines technical precision with artistic vision—a valuable asset in both creative and technical projects. View my photography work on <Link href="https://www.instagram.com/stunningfemalephotos/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Instagram</Link>.</p>

        <div className="border-b border-white/50 my-12"></div>

        {/* Photo Wall Section */}
        <h2 className="mt-8 text-white mb-6">Some of my Photography</h2>
        <PhotoWall directory="/photos" columns={4} />

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Photography and Digital Art</h2>
        <p className="text-gray-300">My background as a photographer taught me to "touch grass" and capture the world through a different lens. This experience translates into my digital work, where I bring an authentic, grounded perspective to visual creation. My Photoshop skills were honed through countless hours of photo editing, manipulation, and artistic creation.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Capabilities</h2>
        <p className="text-gray-300">My Photoshop expertise encompasses a wide range of techniques and workflows:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Photo Restoration</h4>
            <p className="text-sm text-gray-300">Bringing damaged or aged photographs back to life with meticulous attention to detail and historical accuracy.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Composite Creation</h4>
            <p className="text-sm text-gray-300">Blending multiple images into seamless, realistic compositions that tell compelling visual stories.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Digital Painting</h4>
            <p className="text-sm text-gray-300">Creating original artwork using advanced brush techniques and layer manipulation for unique visual expressions.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Cross-Disciplinary Applications</h2>
        <p className="text-gray-300">My Photoshop skills enhance my work across multiple domains:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">UI/UX Design</h4>
            <p className="text-sm text-gray-300">Creating polished mockups and visual assets that elevate user interfaces and experiences in digital products.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Web Development</h4>
            <p className="text-sm text-gray-300">Bridging the gap between design and implementation with precise assets that translate perfectly to code.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Visual Excellence for Your Projects</h3>
        <p className="text-gray-300">My combination of technical Photoshop skills and artistic vision allows me to bring unique value to projects requiring both visual excellence and technical implementation. Whether you need UI design, custom graphics, or visual storytelling, my experience extends beyond the digital realm to create authentic, impactful visuals.</p>

        <div className="mt-8">
          <CTAButton href="/contact" color="green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
            <span>ENHANCE YOUR PROJECT WITH VISUAL EXCELLENCE</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

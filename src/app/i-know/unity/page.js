import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

export default function UnitySkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Unity: Game Development and Video Production</h1>

        <p className="text-gray-300">I've recently been exploring Unity as both a creative
          and technical tool. It's a platform that allows me to bring my ideas to life
          in a way that's both visually stunning and interactive. Whether I'm
          crafting immersive game experiences or producing high-quality video content,
          Unity provides the tools and flexibility I need to achieve my creative
          goals.</p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/unity.png"
          alt="Unity Logo"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div className="flex justify-center mt-4">
        <CTAButton href="/contact" className="!bg-white !text-black">
          Let's Create! <span className="!text-black">→</span>
        </CTAButton>
      </div>
    </div>
  );
}

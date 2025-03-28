import Link from 'next/link';

export default function AwardWinner() {
  return (
    <div className="bg-gradient-to-r from-amber-900/30 to-yellow-700/30 p-6 rounded-lg border border-amber-500/30 shadow-lg text-center">
      <div className="flex flex-col items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold text-amber-400 mb-2">AI Programming Champion</h3>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="text-white font-bold text-xl">#8</span>
            <span className="text-gray-400">out of</span>
            <span className="text-white font-bold text-xl">5,000</span>
            <span className="text-gray-400">participants worldwide</span>
            <span className="text-gray-400">(CodinGame Fantastic Bits)</span>
          </div>

          <p className="text-gray-300 mb-4">
            Developed an advanced AI agent for the 'Fantastic Bits' competition, a complex game inspired by Quidditch where bots compete to score goals while defending their own. My reinforcement learning approach outperformed thousands of professional developers worldwide.
          </p>

          <p className="text-amber-300 mb-4 font-medium">
            Placed 8th at the time of the competition, and after all these years my solution still holds up at rank #9!
          </p>

          <Link
            href="https://www.codingame.com/multiplayer/bot-programming/fantastic-bits/leaderboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors no-underline"
          >
            <span>View Leaderboard</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

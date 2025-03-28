import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

export default function ReinforcementLearningSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Reinforcement Learning: Expert Implementation for Complex Problems</h1>

        <p className="text-gray-300">My journey in Reinforcement Learning began with studying the foundational works of Richard Sutton and quickly evolved into practical implementations that achieved remarkable results. Within a year of focused study and development, I placed 8th out of 5,000 developers worldwide in a competitive RL challenge, demonstrating both my theoretical understanding and implementation skills.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My Reinforcement Learning expertise spans multiple algorithms and frameworks—from value-based methods like DQN to policy gradient approaches like PPO and SAC. I implement these algorithms using <Link href="/i-know/pytorch">PyTorch</Link> to create agents that learn optimal behaviors through interaction with their environments. My approach combines theoretical rigor with practical engineering, ensuring solutions that deliver measurable value.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Professional Impact</h2>
        <p className="text-gray-300">What distinguishes my Reinforcement Learning work is the ability to translate complex theoretical concepts into practical, high-performing implementations. I've developed game-playing agents that outperform human experts, optimization systems for resource allocation, and autonomous decision-making systems for complex environments.</p>

        <p className="mt-4 text-gray-300">My RL agents have been applied to diverse domains—from optimizing trading strategies to improving recommendation systems and automating complex industrial processes. In each case, I focus on creating robust, explainable agents that deliver consistent performance in production environments.</p>

        <p className="mt-4 text-gray-300">I prioritize sample efficiency, stability, and generalization in my RL implementations. My solutions are designed to learn effectively from limited data and transfer knowledge across similar tasks, maximizing their practical utility in real-world applications.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">My Reinforcement Learning Expertise Areas</h2>
        <p className="text-gray-300">I've developed specialized Reinforcement Learning skills across several high-value domains:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Game-Playing Agents</h4>
            <p className="text-sm text-gray-300">Developing agents that master complex games through self-play and exploration, achieving superhuman performance through advanced algorithms like AlphaZero and MuZero.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Multi-Agent Systems</h4>
            <p className="text-sm text-gray-300">Implementing cooperative and competitive multi-agent reinforcement learning for simulations, market dynamics, and complex coordination problems.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Resource Optimization</h4>
            <p className="text-sm text-gray-300">Creating RL systems that optimize resource allocation, scheduling, and routing in complex environments with multiple constraints and objectives.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Deep Reinforcement Learning</h4>
            <p className="text-sm text-gray-300">Combining deep neural networks with RL algorithms using <Link href="/i-know/pytorch">PyTorch</Link> to handle high-dimensional state spaces and complex pattern recognition in decision processes.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Sim-to-Real Transfer</h4>
            <p className="text-sm text-gray-300">Expertise in domain randomization and robust policy learning to transfer policies trained in simulation to real-world environments with minimal performance degradation.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Let's Build Your Next Reinforcement Learning Solution</h3>
        <p className="text-gray-300">Looking for a Reinforcement Learning expert who can deliver game-playing agents, optimization systems, or autonomous decision-making solutions? I'm ready to help transform your requirements into efficient, production-ready RL implementations.</p>

        <div className="mt-8">
          <CTAButton href="/contact" color="green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
            <span>HIRE ME FOR YOUR RL PROJECT</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

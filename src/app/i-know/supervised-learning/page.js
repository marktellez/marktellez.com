import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

export default function SupervisedLearningSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Supervised Learning: Expert Implementation for Business Impact</h1>

        <p className="text-gray-300">My expertise in Supervised Learning encompasses a wide range of algorithms and applications, from classical methods to cutting-edge deep learning approaches. I've implemented supervised models that solve real business problems across industries—from healthcare diagnostics to financial forecasting and natural language understanding.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My Supervised Learning expertise spans the full spectrum of techniques—from linear and tree-based models to deep neural networks implemented with <Link href="/i-know/pytorch">PyTorch</Link>. I excel at feature engineering, model selection, hyperparameter optimization, and creating robust evaluation frameworks. My approach combines technical depth with strategic thinking, ensuring solutions that address core business needs.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Professional Impact</h2>
        <p className="text-gray-300">What distinguishes my Supervised Learning work is the ability to translate complex requirements into efficient, interpretable solutions. I've developed medical diagnostic models that match or exceed expert performance, financial prediction systems that capture subtle market patterns, and text classification models that automate document processing at scale.</p>

        <p className="mt-4 text-gray-300">At <Link href="/companies-ive-worked-for/voxbird-ai">VoxBirdAI</Link>, I built speech recognition and voice synthesis models using supervised learning techniques that achieved remarkable accuracy and naturalness. The Text-To-Speech model was so realistic that even Snoop Dogg's wife couldn't distinguish between real recordings and my model's voice generations. This same technology now powers <Link href="https://zooly.ai/apps/ai-or-not" target="_blank" rel="noopener noreferrer">Zooly.ai's "AI or Not" application</Link>.</p>

        <p className="mt-4 text-gray-300">I prioritize model interpretability, robustness to distribution shifts, and careful validation. My supervised learning implementations are designed with an eye toward production deployment, ensuring they continue to deliver value in real-world conditions.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">My Supervised Learning Expertise Areas</h2>
        <p className="text-gray-300">I've developed specialized Supervised Learning skills across several high-value domains:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Medical Diagnostics</h4>
            <p className="text-sm text-gray-300">Building classification and segmentation models for medical imaging and diagnostic applications, with careful attention to precision, recall, and clinical relevance.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Speech Recognition</h4>
            <p className="text-sm text-gray-300">Implementing automatic speech recognition systems at <Link href="/companies-ive-worked-for/voxbird-ai">VoxBirdAI</Link> using supervised learning approaches with advanced neural architectures.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Natural Language Processing</h4>
            <p className="text-sm text-gray-300">Developing text classification, sentiment analysis, and named entity recognition models using supervised learning techniques with transformer architectures.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Time Series Forecasting</h4>
            <p className="text-sm text-gray-300">Creating predictive models for financial markets, demand forecasting, and anomaly detection in time series data using specialized supervised learning approaches.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Ensemble Methods</h4>
            <p className="text-sm text-gray-300">Expertise in combining multiple supervised learning models through stacking, boosting, and bagging to achieve superior performance and robustness.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Let's Build Your Next Supervised Learning Solution</h3>
        <p className="text-gray-300">Looking for a Supervised Learning expert who can deliver medical diagnostics, speech recognition, NLP, or forecasting solutions? I'm ready to help transform your requirements into efficient, production-ready models.</p>

        <div className="mt-8">
          <CTAButton href="/contact" color="green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
            <span>HIRE ME FOR YOUR ML PROJECT</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

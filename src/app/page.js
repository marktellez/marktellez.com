
import Card from "@/ui/card";
import Pill from "@/ui/pill";
import CTAButton from "@/ui/cta-button";
import AwardWinner from "@/ui/award-winner";
import Codementor from "@/ui/codementor";
import SkillPills from "@/ui/skill-pills";

export default function Home() {
  // Define available colors to cycle through
  const colors = ['green', 'purple', 'teal', 'orange'];

  // Function to get color based on index
  const getCategoryColor = (index) => colors[index % colors.length];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="container">
        <h1>Expert Software Developer and AI Engineer</h1>
        <h2>I have 28 years experience as professional software developer.</h2>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-12 w-full max-w-2xl mx-auto">
          <CTAButton href="/why-hire-me" color=" teal">
            <svg className="w-5 h-5" fill=" none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin=" round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <span>WHY HIRE ME?</span>
          </CTAButton>
        </div >
      </div >

      <div className="w-full max-w-3xl mx-auto mb-12 space-y-8">
        <AwardWinner />
        <Codementor />
      </div>


      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8 my-8">
        <div className="flex-1 min-w-0">
          <Card color="green" title="My Programming Principles" imageUrl="/code.png">
            <p>I specialize in well-built software that scales and looks great. I have spent more than 80% of my life not just slapping code together but understanding good software practices that most developers just don't seem to bother with.</p>

            <p>I am a fan of SOLID principles, hexagonal and component based architectures and liberal use of functional programming to keep things snappy to view and to modify.</p>

            <p>In my quest for beautiful code I learned languages like LISP, not because I wanted to write code in LISP, but because I was very impressed with the code I found in the book: "Structure and Interpretation of Computer Programs".</p>
          </Card>
        </div>

        <div className="flex-1 min-w-0">
          <Card color="purple" title="I Build Custom ML Models" imageUrl="/models.png">
            <p>I started my AI/ML journey quite a few years back when I got interested in Reinforcement Learning and the writings of Rich Sutton, and within a year I placed 8th out of 5000 developers in the world.</p>

            <p>I run 2 RTX 4090s in my development box that I hand built. With this firepower I can run diffusion models for generating graphics and 3d models, agents that run autonomously to accomplish my goals while I work on other things.</p>

            <p>I also tend to run models like Qwen and DeepSeek locally to save on the cost of running them on the cloud. This also provides me with more control and privacy, both things I value.</p>
          </Card>
        </div >

      </div >

      <SkillPills className="max-w-5xl my-4 md:my-6" />

      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8 my-8">
        <div className="flex-1 min-w-0">
          <Card color="green" title="I Superpower My Teams" imageUrl="/teams.png">
            <p>I have spent years of my career focusing on training and mentoring Mid and Jr. level developers. I love to help people grow into better programmers, distilling the years and dozens of books into real-world lessons.</p>

            <p>I know not everyone has had the time to read and digest what I have, nor had the wonderfully enriching experience of havin great mentors like Douglas Crockford and Jim Weirich. So it's my mission to share what has been revealed to me.</p>

            <p>Instead of putting all my effort into creating YouTube channels, I prefer to work side by side in real time with my team, sharing my tricks and tips on how to use AI to speed up their development tasks and better organize their code.</p>
          </Card>
        </div>

        <div className="flex-1 min-w-0">
          <Card color="purple" title="Revenue: My Favorite Metric" imageUrl="/revenue.png">
            <p>So many programmers and employees in general really dont understand or care that much about revenue. Something that I find abhorrent. Maybe its because I am self taught and have been working since I was 17.</p>

            <p>Time after time I see people wasting time on things that don't matter and developers keeping quiet when there is an issue that should be raised instead of bringing up and looking for an efficient way to fix the problem.</p>

            <p>You will not experience this sort of waste with me. My goal is not to just do things right the first time, but to constantly try and find ways to save time and money. After all, if the company I work for is burning money for no good reason... I won't be employed for long.</p>
          </Card>
        </div >
      </div >

      <div className="w-full max-w-5xl my-16">
        <h3 className="text-center mb-8">Some Companies I've Coded For</h3>

        <div className="flex flex-wrap gap-3 md:gap-4 justify-center border border-white/10 p-6 rounded-lg">
          <Pill href="/companies-ive-worked-for/intel" color="green">Intel</Pill>
          <Pill href="/companies-ive-worked-for/upperdeck" color="purple">UpperDeck</Pill>
          <Pill href="/companies-ive-worked-for/callaway-golf" color="teal">Callaway Golf</Pill>
          <Pill Pill href="/companies-ive-worked-for/geico" color="orange">GEICO</Pill>
          <Pill Pill href="/companies-ive-worked-for/youtube" color="purple">YouTube</Pill>
          <Pill Pill href="/companies-ive-worked-for/uber" color="teal">Uber</Pill>
          <Pill Pill href="/companies-ive-worked-for/codementor" color="orange">CodeMentor</Pill>
          <Pill Pill href="/companies-ive-worked-for/devmentor-live" color="green">DevmentorLive</Pill>
          < Pill href="/companies-ive-worked-for/voxbird-ai" color="purple">VoxBirdAI</Pill>
        </div >


      </div >

      <div className="w-full max-w-5xl my-12">

        <CTAButton href="/contact" color=" green">
          <svg className="w-5 h-5" fill=" none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin=" round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg >
          <span>Want to work with me? Click here to contact me!</span>
        </CTAButton ></div >

    </div >
  );
}

import avatarsPic from "@/asset/Avatars.png";
import heroPic from "@/asset/Kiddo-hero.png";
import mobileFramePic from "@/asset/mobile-frame.png";
import mobilePic from "@/asset/mobile.png";
import scrollingPic from "@/asset/scrolling.png";
import BattleItem from "@/components/BattleItem";
import ChallengeItem from "@/components/ChallengeItem";
import StatCard from "@/components/StatCard";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section id="hero" className="bg-backgroud">
        <div className="bg-kiddo-bgSoft rounded-4xl">
         <div className="mx-auto max-w-7xl py-20 grid md:grid-cols-2 items-center md:gap-0 ">
            <div className="flex flex-col gap-6">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-[63px] tracking-[-1.8px]">
                  A Real Plan For Your Kids’ Phone Addiction.
                </h1>
                <p className=" text-slate-600 leading-7 tracking-[-0.003em]">
                  The smart parental control app that helps families manage screen time without the fights. Set healthy boundaries and encourage better habits.
                </p>
                <Link
                  href="/join/1"
                  className="inline-flex items-center justify-center bg-kiddo-brand px-5 py-3 text-white font-bold hover:bg-slate-800 w-full max-w-[250px] text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-6 tracking-0"
                >
                  Join Waitlist
                </Link>
                <div className="flex items-center gap-4 mt-2">
                  <Image src={avatarsPic} alt="Kiddo" width={80} height={32} priority className="justify-self-end" />
                  <p className="text-kiddo-muted font-bold leading-[1.65]">
                    163+ parents have already joined
                  </p>
                </div>
                

              </div>
                
              
            <Image src={heroPic} alt="Kiddo" width={563} height={371} priority className="justify-self-end" />
          </div>
        </div>
        
      </section>

      {/* ============== PROBLEM ============== */}
       <section id="problem" className="pt-4 pb-40 xl:pb-64">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4">
               <p className="text-base font-semibold tracking-widest text-kiddo-muted uppercase text-center pt-8">
              Why it’s important
            </p>
            <h2 className="text-3xl md:text-5xl font-bold  text-center leading-[63px] tracking-[-0.018em]">
              It’s Not Just A Screen. It’s Their Future.
            </h2>
            <p className=" text-kiddo-muted text-center leading-7 tracking-[-0.003em]">
              Children losing critical development years to screen addiction, here's what the research shows:
            </p>
            </div>
           

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 border-18 border-[#FAFAFA]">
              <StatCard value="67%" label="More prone to struggle with social interactions" bg="bg-[#FCE88D]" textColor="text-kiddo-text" />
              <StatCard value="2.3x" label="More likely to develop anxiety & depression" bg="bg-[#6B47DE]" textColor="text-kiddo-onDark"/>
              <StatCard value="-8"  label="IQ points linked to excessive screen addiction" bg="bg-[#AAC9FA]" textColor="text-kiddo-text"/>
              <StatCard value="53%" label="Higher risk of sleep disorders affecting growth & learning" bg="bg-[#C448DF]" textColor="text-kiddo-onDark"/>
            </div>
          </div>
        </section>

    {/* ============== Algorithms Section ============== */}
     <section className="pt-4">
      <div className="mx-auto max-w-7xl">
        {/* Headline */}
        <div className="flex flex-col gap-4">
            <h2 className="text-5xl md:text-6xl font-extrabold text-center leading-[63px] tracking-[-0.018em]">
            You’re Not Fighting Your Child.
            <br className="hidden md:block" />
            You’re Fighting Billion-Dollar Algorithms.
          </h2>
          <p className="text-center text-kiddo-muted max-w-2xl mx-auto leading-7 tracking-[-0.003em]">
            Social media companies employ thousands of engineers and spend billions perfecting
            addictive design patterns. It’s not a fair fight for any parent.
          </p>

        </div>
        
        {/* Stats */}
        <div className="my-12 grid gap-8 sm:grid-cols-3">
          <div className="p-6 text-center">
            <div className="text-4xl font-bold ">$14B+</div>
            <p className="mt-2 text-sm text-kiddo-muted">
              Spent annually on platform optimization to maximize engagement and time spent
            </p>
          </div>
          <div className="p-6 text-center">
            <div className="text-4xl font-bold ">40,000+</div>
            <p className="mt-2 text-sm text-kiddo-muted">
              Engineers working to make apps more engaging and harder to put down
            </p>
          </div>
          <div className="p-6 text-center">
            <div className="text-4xl font-bold  text-kiddo-accent">~4.5 hours</div>
            <p className="mt-2 text-sm text-kiddo-muted">
              Average daily screen time for teens, with many spending much more
            </p>
          </div>
        </div>

        {/* Callout card */}
        <div className="mt-10 grid gap-14 md:grid-cols-2 items-center rounded-2xl  bg-kiddo-bgSoft p-10 md:p-12">
          <div className="flex flex-col gap-8">
            <h3 className="text-xl md:text-2xl font-bold tracking-[-0.003em]">
              Every scroll, like, and notification is engineered to trigger dopamine
            </h3>
            <p className=" text-kiddo-muted tracking-[-0.003em]">
              The same neuroscience that makes slot machines addictive is now in your child's pocket. 
            </p>
           <p className=" text-kiddo-muted tracking-[-0.003em]">
              As a parent, you're doing your best. But without the right tools, it's like trying to compete with a casino that never closes.
            </p>
          </div>

           <Image
              src={scrollingPic}
              alt="Attention-grabbing apps preview"
              width={436}
              height={232}
              className="w-full h-auto"
              priority
            />
        </div>

        {/* CTA */}
        <div className="mt-12 text-center flex flex-col justify-center items-center gap-8">
          <p className="text-kiddo-text font-bold tracking-[-0.003em]">
            You need a solution that's as smart as the platforms trying to capture your child's attention.
          </p>
         
          <Link
            href="/join/1"
            className="inline-flex items-center justify-center bg-kiddo-brand px-5 py-3 text-white font-bold hover:bg-slate-800 w-full max-w-[250px] text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-6 tracking-0"
          >
            Get Early Access
          </Link>
        </div>
      </div>
    </section>
    {/* ============== Daily Battles Section ============== */}
       <section className="mb-4 pt-40 xl:pt-64">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 md:grid-cols-2 items-center">
              {/* Left column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold leading-[63px] tracking-[-0.018em]">
                  Exhausted From The Daily Battles?
                </h2>

                <ul className="mt-8 space-y-10">
                  <BattleItem
                    icon="⏰"
                    iconLabel="Alarm clock"
                    title="The same argument, every single day"
                    text="“Just 5 more minutes” turns into half an hour."
                  />
                  <BattleItem
                    icon="🤷‍♀️"
                    iconLabel="Shrugging person"
                    title="Eventually, you give up"
                    text="You let it go to avoid another battle today."
                  />
                  <BattleItem
                    icon="💭"
                    iconLabel="Thought bubble"
                    title="The guilt weighs on you"
                    text="Am I being too strict? Too lenient? Just a bad parent?"
                  />
                </ul>

                <div className="mt-12">
                  <p className="font-bold text-xl leading-6 tracking-[-0.003em]">It doesn’t have to be a battle.</p>
                  <p className="text-kiddo-muted leading-6 ">
                    Set healthy boundaries without the constant friction.
                  </p>
                </div>
              </div>

              {/* Right column – emoji card */}
              <div className="rounded-2xl bg-[#F5F5F5] p-8 md:p-12 h-full flex items-center justify-center">
                <span className="text-7xl md:text-8xl">😫</span>
              </div>
            </div>
          </div>
        </section>

       {/* ============== How Kiddo Can Help ============== */}
        <section className="">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-5xl md:text-6xl font-extrabold leading-[63px] tracking-[-0.018em] py-40 xl:py-64">
              See How Kiddo Can Help <span className="align-[-2px]">⚡</span>
            </h2>

            <div className="space-y-40 xl:space-y-64 mb-40 xl:mb-64">
              {/* 1) Scheduled Time Blocks */}
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="md:order-2">
                  <span className="inline-flex items-center rounded-full bg-[#F5F5F5] px-4 py-2 text-base font-semibold tracking-wide text-kiddo-muted">
                    Smart Scheduling
                  </span>
                  <h3 className="my-4 text-3xl md:text-5xl font-bold leading-[63px] tracking-[-0.018em]">
                    Scheduled Time Blocks
                  </h3>
                  <p className="text-kiddo-muted max-w-prose text-xl">
                    Block distracting apps during school, homework, or family time. Automatic enforcement - no manual monitoring needed.
                  </p>
                </div>
                <Image
                  src={mobilePic}
                  alt="Scheduled Time Blocks"
                  width={640}
                  height={480}
                  className="w-full h-auto object-contain"
                  priority={false}
                />
              </div>

              {/* 2) Time Limit / Bank */}
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div>
                  <span className="inline-flex items-center rounded-full bg-[#F5F5F5] px-4 py-2 text-base font-semibold tracking-wide text-kiddo-muted">
                    Smart Scheduling
                  </span>
                  <h3 className="my-4 text-4xl md:text-5xl font-bold leading-[63px] tracking-[-0.018em]">
                    Time Limit / Bank
                  </h3>
                  <p className="text-kiddo-muted max-w-prose text-xl">
                    Block distracting apps during school, homework, or family time. Automatic enforcement - no manual monitoring needed.
                  </p>
                </div>
                <Image
                  src={mobilePic}
                  alt="Time Limit / Bank"
                  width={640}
                  height={480}
                  className="w-full h-auto object-contain"
                  priority={false}
                />
              </div>

              {/* 3) Distraction Alerts — centered variant */}
              <div className="space-y-6 md:space-y-8 mt-15">
                <div className="text-center mb-12">
                  <span className="inline-flex items-center rounded-full bg-[#F5F5F5] px-4 py-2 text-base font-semibold tracking-wide text-kiddo-muted">
                    Smart Scheduling
                  </span>
                  <h3 className="my-4 text-4xl md:text-5xl font-bold leading-[63px] tracking-[-0.018em]">
                    Distraction Alerts
                  </h3>
                  <p className=" text-kiddo-muted max-w-[667px] mx-auto text-xl">
                Block distracting apps during school, homework, or family time. Automatic enforcement - no manual monitoring needed.
                  </p>
                </div>

                {/* image card */}
                <div className="mx-auto overflow-hidden">
                  <Image
                      src={mobileFramePic}       // <- naudok tavo importuotą paveikslą
                      alt="Distraction Alerts preview"
                      width={903}
                      height={507}
                      className="justify-self-center"
                      priority={false}
                    />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============== Replace Punishment Section ============== */}
        <section className="pt-10 xl:pt-16 pb-40 xl:pb-64">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 md:gap-16 md:grid-cols-2 items-start">
             {/* Left: copy */}
            <div className="md:flex md:flex-col md:justify-center md:self-stretch">
              <span className="inline-flex items-center rounded-full bg-[#F5F5F5] px-4 py-2 text-base font-semibold tracking-wide text-kiddo-muted max-w-[171px]">
                Smart Scheduling
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-[63px] tracking-[-1.8px]">
                Replace Punishment
                <br className="hidden md:block" />
                With Positive Reinforcement
              </h2>
              <p className="mt-4 text-kiddo-muted max-w-prose">
                Instead of taking away screen time, reward extra privileges when your
                kids complete real-world challenges and tasks.
              </p>
            </div>

              {/* Right: list */}
              <div className="">
                <p className="mb-10 text-sm uppercase  text-kiddo-muted">
                  Example Challenges
                </p>

               <div className="space-y-6">
                  <ChallengeItem
                    icon="🛏️"
                    iconLabel="Bed"
                    title="Make your bed"
                    subtitle="Complete the quick morning task"
                    rewardText="+5 min"
                  />
                  <ChallengeItem
                    icon="🧃"
                    iconLabel="Juice box"
                    title="Do the dishes"
                    subtitle="Complete the quick morning task"
                    rewardText="+10 min"
                  />
                  <ChallengeItem
                    icon="🗑️"
                    iconLabel="Trash bin"
                    title="Take out the trash"
                    subtitle="Complete the quick morning task"
                    rewardText="+15 min"
                  />
                  <ChallengeItem
                    icon="📚"
                    iconLabel="Books"
                    title="Finish your book"
                    subtitle="Complete the quick morning task"
                    rewardText="+45 min"
                  />
                  <ChallengeItem
                    icon="💪"
                    iconLabel="Flexed biceps"
                    title="Complete 20 push-ups"
                    subtitle="Complete the quick morning task"
                    rewardText="+15 min"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== Join Movement CTA ============== */}
        <section className="pt-60 xl:pt-112 pb-80 xl:pb-156">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-[63px] tracking-[-0.018em]">
              Be Part Of The Change.
              <br className="hidden md:block" />
              Let’s Fight Screen Addiction Together.
            </h2>

            <p className="mt-4 md:mt-8 text-kiddo-muted mx-auto text-lg max-w-[600px]">
              This isn't just about managing your child's screen time. It's about joining a global movement of parents committed to healthier digital habits.
            </p>

            <div className="my-16">
             
              <Link
                  href="/join/1"
                  className="inline-flex items-center justify-center bg-kiddo-brand px-5 py-3 text-white font-bold hover:bg-slate-800 w-full max-w-[250px] text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-6 tracking-0"
                >
                  Join Today
                </Link>
            </div>

            {/* perks row */}
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-kiddo-muted">
              <li className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#97E0AA]" aria-hidden="true"></span>
                🌱 Extra Free Access
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#97E0AA]" aria-hidden="true"></span>
                📬 Live Updates On Our Progress
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#97E0AA]" aria-hidden="true"></span>
                🎁 Exclusive Offers
              </li>
            </ul>
          </div>
        </section>




    </>
  );
}


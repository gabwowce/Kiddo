import avatarsPic from "@/asset/Avatars.png";
import heroPic from "@/asset/Kiddo-hero.png";

import mobileFramePic from "@/asset/mobile-frame.png";
import mobilePic from "@/asset/mobile.png";
import scrollingPic from "@/asset/scrolling.png";
import BattleItem from "@/components/BattleItem";
import ChallengeItem from "@/components/ChallengeItem";
import OptimizedVideo from "@/components/OptimizedVideo";
import Image from "next/image";
import Link from "next/link";

import DesktopStatGrid from "@/components/DesktopStatGrid";
import MobileStatCarousel from "@/components/MobileStatCarousel";

export default function Page() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section id="hero" className="bg-backgroud">
        <div className="bg-kiddo-bgSoft rounded-2xl mx-0 md:mx-7">
         <div className="mx-auto pt-8 md:pt-26 pb-26 md:pb-39 grid md:grid-cols-2 items-center md:gap-20 kiddo-container">
            <div className="flex flex-col gap-6 ">
                <h1 className="text-5xl xl:text-6xl font-extrabold max-w-[504px] leading-[48px] tracking-[-1.8px] xl:leading-[63px] xl:tracking-[-1.8px] ">
                  A Real Plan For Your Kids’ Phone Addiction.
                </h1>
                <p className=" text-slate-600 leading-7 max-w-[454px] tracking-[-0.003em] ">
                  Set healthy screen time boundaries for your kids and encourage better habits with our smart app.
                </p>
                <Link
                  href="/join/1"
                  className="inline-flex items-center justify-center bg-kiddo-brand px-5 py-3  text-white font-bold hover:bg-kiddo-brand/80 w-full max-w-[250px] 
                  text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-6 tracking-0 "
                >
                  Join Waitlist
                </Link>
                <div className="flex items-center gap-4 mt-2 ">
                  <Image src={avatarsPic} alt="Kiddo" width={80} height={32} priority className="justify-self-end" />
                  <p className="text-kiddo-muted font-bold leading-[1.65]">
                    163+ parents have already joined
                  </p>
                </div>
                

              </div>

            <OptimizedVideo
              srcWebm="/media/Kiddo.webm"
              className="hidden md:block w-full"
              poster={heroPic}
              width={563}
              height={371}
            />
            {/* Vartotojams su reduced motion rodom statinį vaizdą */}
            <Image
              src={heroPic}
              alt="Kiddo"
              width={563}
              height={371}
              priority
              className="justify-self-end hidden motion-reduce:block"
            />
          </div>
        </div>
        
      </section>


      {/* ============== PROBLEM ============== */}
       <section id="problem" className="pt-4 pb-32 xl:pb-64">
          <div className="mx-auto kiddo-container">
            <div className="flex flex-col gap-4 justify-center items-center">
               <p className="text-base font-semibold tracking-widest text-kiddo-muted uppercase text-center pt-8 ">
              Why it’s important
            </p>
            <h2 className="text-4xl md:text-5xl font-bold max-w-[520px] xl:max-w-6xl text-center leading-[46px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em]">
              It’s Not Just A Screen. It’s Their Future.
            </h2>
            <p className=" text-kiddo-muted text-center leading-7 tracking-[-0.003em] ">
              Children losing critical development years to screen addiction, here's what the research shows:
            </p>
            </div>
              <MobileStatCarousel items={stats} />
              <DesktopStatGrid items={stats} />
            
    
          </div>
        </section>

    {/* ============== Algorithms Section ============== */}
     <section className="pt-4">
      <div className="mx-auto kiddo-container">
        {/* Headline */}
        <div className="flex flex-col gap-4">
            <h2 className="text-5xl xl:text-6xl font-extrabold text-center leading-[58px] tracking-[-0.018em] xl:leading-[63px]">
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

          <OptimizedVideo
              srcWebm="/media/scrolling.webm"
              poster={scrollingPic}
              width={436}
              height={232}
              className="w-full h-auto motion-reduce:hidden"
            />

           <Image
              src={scrollingPic}
              alt="Attention-grabbing apps preview"
              width={436}
              height={232}
              className="w-full h-auto hidden motion-reduce:block"
              priority
            />
        </div>

        {/* CTA */}
        <div className="hidden md:flex  mt-12 text-center flex-col justify-center items-center gap-8">
          <p className="text-kiddo-text font-bold tracking-[-0.003em]">
            You need a solution that's as smart as the platforms trying to capture your child's attention.
          </p>
         
          <Link
            href="/join/1"
            className="inline-flex items-center justify-center bg-kiddo-brand px-5 py-3 text-white font-bold hover:bg-kiddo-brand/80 w-full max-w-[250px] text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-6 tracking-0"
          >
            Get Early Access
          </Link>
        </div>
      </div>
    </section>
    {/* ============== Daily Battles Section ============== */}
       <section className="mb-4 pt-32 xl:pt-64">
          <div className="mx-auto kiddo-container">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              {/* Left column */}
              <div>
                <h2 className="text-5xl xl:text-6xl font-bold leading-[46px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em]">
                  Exhausted From The Daily Battles?
                </h2>

                <div className="rounded-2xl bg-[#F5F5F5] py-25 my-9 h-full flex lg:hidden items-center justify-center">
                  <span className="text-7xl md:text-8xl">😫</span>
                </div>

                <ul className="lg:mt-8 space-y-10">
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
              <div className="rounded-2xl bg-[#F5F5F5] p-8 md:p-12 h-full hidden lg:flex  items-center justify-center">
                <span className="text-7xl md:text-8xl">😫</span>
              </div>
            </div>
          </div>
        </section>

       {/* ============== How Kiddo Can Help ============== */}
        <section className="">
          <div className="mx-auto kiddo-container">
            <h2 className="text-center text-5xl xl:text-6xl font-extrabold leading-[46px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em] py-24 xl:py-64">
              See How Kiddo Can Help <span className="align-[-2px]">⚡</span>
            </h2>

            <div className="space-y-24 xl:space-y-64 mb-40 xl:mb-64">
              {/* 1) Scheduled Time Blocks */}
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="md:order-2">
                  <span className="inline-flex items-center rounded-full bg-[#F5F5F5] px-4 py-2 text-base font-semibold tracking-wide text-kiddo-muted">
                    Smart Scheduling
                  </span>
                  <h3 className="my-4 text-3xl md:text-5xl font-bold leading-[46px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em]">
                    Scheduled Time Blocks
                  </h3>
                  <p className="text-kiddo-muted max-w-prose text-xl">
                    Block distracting apps during school, homework, or family time. Automatic enforcement - no manual monitoring needed.
                  </p>
                </div>

                 <OptimizedVideo
                    srcWebm="/media/blocked1.webm"
                    poster={mobilePic}
                    width={640}
                  height={480}
                    className="w-full h-auto object-contain motion-reduce:hidden"
                  />
                <Image
                  src={mobilePic}
                  alt="Scheduled Time Blocks"
                  width={640}
                  height={480}
                  className="w-full h-auto object-contain hidden motion-reduce:block"
                  priority={false}
                />
              </div>

              {/* 2) Time Limit / Bank */}
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div>
                  <span className="inline-flex items-center rounded-full bg-[#F5F5F5] px-4 py-2 text-base font-semibold tracking-wide text-kiddo-muted">
                    Smart Scheduling
                  </span>
                  <h3 className="my-4 text-4xl md:text-5xl font-bold leading-[46px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em]">
                    Time Limit / Bank
                  </h3>
                  <p className="text-kiddo-muted max-w-prose text-xl">
                    Block distracting apps during school, homework, or family time. Automatic enforcement - no manual monitoring needed.
                  </p>
                </div>

                 <OptimizedVideo
                    srcWebm="/media/blocked2.webm"
                    poster={mobilePic}
                    width={640}
                  height={480}
                    className="w-full h-auto object-contain motion-reduce:hidden"
                  />
    
                <Image
                  src={mobilePic}
                  alt="Time Limit / Bank"
                  width={640}
                  height={480}
                  className="w-full h-auto object-contain hidden motion-reduce:block"
                  priority={false}
                />

                
              </div>

              {/* 3) Distraction Alerts — centered variant */}
              <div className="space-y-6 md:space-y-8 mt-58 mb-24 lg:mt-0 lg:mb-0">
                <div className="text-center mb-12">
                  <span className="inline-flex items-center rounded-full bg-[#F5F5F5] px-4 py-2 text-base font-semibold tracking-wide text-kiddo-muted">
                    Smart Scheduling
                  </span>
                  <h3 className="my-4 text-4xl md:text-5xl font-bold leading-[46px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em]">
                    Distraction Alerts
                  </h3>
                  <p className=" text-kiddo-muted max-w-[667px] mx-auto text-xl">
                Block distracting apps during school, homework, or family time. Automatic enforcement - no manual monitoring needed.
                  </p>
                </div>

                {/* image card */}
                <div className="mx-auto overflow-hidden">
    
                   <OptimizedVideo
                    srcWebm="/media/notification.webm"
                    poster={mobileFramePic}
                      width={903}
                      height={507}
                    className="h-full w-full xl:w-[903px] justify-self-center motion-reduce:hidden"
                  />
    
                  <Image
                      src={mobileFramePic}      
                      alt="Distraction Alerts preview"
                      width={903}
                      height={507}
                      className="justify-self-center hidden motion-reduce:block"
                      priority={false}
                    />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============== Replace Punishment Section ============== */}
        <section className="pt-24 xl:pt-16 pb-24 xl:pb-64 ">
          <div className="mx-auto kiddo-container">
          <div className="grid gap-8 xl:gap-16 xl:grid-cols-2 items-start">
            {/* Left: copy */}
            <div className="text-center xl:text-left xl:flex xl:flex-col xl:justify-center xl:self-stretch">
              <span className="inline-flex items-center rounded-full bg-[#F5F5F5] px-4 py-2 text-base font-semibold tracking-wide text-kiddo-muted max-w-[171px] mx-auto md:mx-0">
                Smart Scheduling
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-[48px] tracking-[-1.8px] xl:leading-[63px] xl:tracking-[-1.8px]">
                Replace Punishment
                <br className="hidden md:block" />
                With Positive Reinforcement
              </h2>

              <p className="mt-4 text-kiddo-muted max-w-prose mx-auto xl:mx-0">
                Instead of taking away screen time, reward extra privileges when your
                kids complete real-world challenges and tasks.
              </p>
            </div>


              {/* Right: list */}
              <div className="">
                <p className="mb-10 text-sm uppercase  text-kiddo-muted hidden xl:block">
                  Example Challenges
                </p>

               <div className="space-y-6">
                  <ChallengeItem
                    icon="🛏️"
                    iconLabel="Bed"
                    title="Make your bed"
                    subtitle="Complete to earn screen time"
                    rewardText="+5 min"
                  />
                  <ChallengeItem
                    icon="🧃"
                    iconLabel="Juice box"
                    title="Do the dishes"
                    subtitle="Complete to earn screen time"
                    rewardText="+10 min"
                  />
                  <ChallengeItem
                    icon="🗑️"
                    iconLabel="Trash bin"
                    title="Take out the trash"
                    subtitle="Complete to earn screen time"
                    rewardText="+15 min"
                  />
                  <ChallengeItem
                    icon="📚"
                    iconLabel="Books"
                    title="Finish your book"
                   subtitle="Complete to earn screen time"
                    rewardText="+45 min"
                  />
                  <ChallengeItem
                    icon="💪"
                    iconLabel="Flexed biceps"
                    title="Complete 20 push-ups"
                    subtitle="Complete to earn screen time"
                    rewardText="+15 min"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== Join Movement CTA ============== */}
        <section className="pt-0 xl:pt-112 pb-24 xl:pb-156">
          <div className="mx-auto max-w-5xl text-center  px-8">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-[58px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em]">
              Be Part Of The Change.
              <br className="hidden md:block" />
              Let’s Fight Screen Addiction Together.
            </h2>

            <p className="mt-4 md:mt-8 text-kiddo-muted mx-auto text-xl max-w-[600px]">
              This isn't just about managing your child's screen time. It's about joining a global movement of parents committed to healthier digital habits.
            </p>

            <div className="my-12 md:my-16">
             
              <Link
                  href="/join/1"
                  className="inline-flex items-center justify-center bg-kiddo-brand2 px-5 py-3 text-white font-bold hover:bg-kiddo-brand2/80 w-full max-w-[250px] text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-6 tracking-0"
                >
                  Join Today
                </Link>
            </div>

            {/* perks row */}
            <ul className="mt-6 flex flex-wrap md:items-center md:justify-center gap-x-8 gap-y-3 text-sm text-kiddo-muted">
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


const stats = [
  { value: "67%",  label: "More prone to struggle with social interactions",            bg: "bg-[#FCE88D]", textColor: "text-kiddo-text" },
  { value: "2.3x", label: "More likely to develop anxiety & depression",                bg: "bg-[#6B47DE]", textColor: "text-kiddo-onDark" },
  { value: "-8",   label: "IQ points linked to excessive screen addiction",             bg: "bg-[#AAC9FA]", textColor: "text-kiddo-text" },
  { value: "53%",  label: "Higher risk of sleep disorders affecting growth & learning", bg: "bg-[#C448DF]", textColor: "text-kiddo-onDark" },
];

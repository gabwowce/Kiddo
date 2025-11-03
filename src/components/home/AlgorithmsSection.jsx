

import scrollingPic from "@/asset/scrolling.png";

import OptimizedVideo from "@/components/OptimizedVideo";
import Image from "next/image";
import Link from "next/link";
;
export default function AlgorithmsSection(){
    return(
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
                    href="/survey?source=hero&audience=schools"
                    className="inline-flex items-center justify-center bg-kiddo-brand px-5 py-3 text-white font-bold hover:bg-kiddo-brand/80 w-full max-w-[250px] text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-6 tracking-0"
                  >
                    Get Early Access
                  </Link>
                </div>
              </div>
            </section>
    );
}
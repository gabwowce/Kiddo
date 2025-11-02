import avatarsPic from "@/asset/Avatars.png";
import heroPic from "@/asset/Kiddo-hero.png";

import OptimizedVideo from "@/components/OptimizedVideo";
import Image from "next/image";
import Link from "next/link";


export default function HeroSection(){
    return(
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
                  <p className="text-kiddo-muted text-base font-bold leading-[1.65]">
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
    );
}
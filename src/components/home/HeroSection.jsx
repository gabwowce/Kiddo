import heroPic from "@/asset/Kiddo-hero.png";

import OptimizedVideo from "@/components/OptimizedVideo";
import Image from "next/image";
import Link from "next/link";


export default function HeroSection(){
    return(
    <section id="hero" className="bg-backgroud">
        <div className="bg-kiddo-bgSoft rounded-2xl mx-0 md:mx-7">
            <div className="mx-auto pt-8 md:pt-26 pb-26 md:pb-39 grid md:grid-cols-2 items-center md:gap-20 kiddo-container u-stagger">
                <div className="flex flex-col gap-6 u-stagger">
                    <span className="u-reveal self-start w-fit inline-flex items-center rounded-full bg-[#FCE88D] px-4 py-2 text-base font-semibold tracking-wide text-[#6C5800] text-center">
                    Išmanus sprendimas klasėms
                    </span>

                    <h1 className="u-reveal text-5xl xl:text-6xl font-extrabold max-w-[504px] leading-[48px] tracking-[-1.8px] xl:leading-[63px] xl:tracking-[-1.8px] ">
                    Išjunk trukdžius. Įjunk mokymąsi.
                    </h1>
                    <p className="u-reveal text-kiddo-muted leading-7 max-w-[454px] tracking-[-0.003em] ">
                    „Kiddo School Mode“ automatiškai blokuoja nereikalingas programėles pamokų metu – ramybė klasėje be pastangų.
                    </p>
                    <Link
                    href="/survey?source=hero&audience=schools"
                    className="u-reveal inline-flex items-center justify-center bg-kiddo-brand px-5 py-3  text-white font-bold hover:bg-kiddo-brand/80 w-full max-w-[250px] 
                    text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-6 tracking-0 "
                    >
                    Gauti pasiūlymą
                    </Link>
                                     

                </div>

               <OptimizedVideo
                srcWebm="/media/Kiddo.webm"
                poster={heroPic}
                className="u-reveal hidden md:block"
                objectFit="object-cover"          
                width={563}
                height={371}
                sizes="(min-width: 768px) 563px, 100vw"
                />

                {/* Vartotojams su reduced motion rodom statinį vaizdą */}
                <Image
                src={heroPic}
                alt="Kiddo"
                width={563}
                height={371}
                priority
                className="u-reveal justify-self-end hidden motion-reduce:block"
                />
            </div>
            </div>
        
      </section>
    );
}
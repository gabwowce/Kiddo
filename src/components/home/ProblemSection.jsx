


import DesktopStatGrid from "@/components/DesktopStatGrid";
import MobileStatCarousel from "@/components/MobileStatCarousel";


export default function ProblemSection(){
    return(
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
    );
}


const stats = [
  { value: "67%",  label: "More prone to struggle with social interactions",            bg: "bg-[#FCE88D]", textColor: "text-kiddo-text" },
  { value: "2.3x", label: "More likely to develop anxiety & depression",                bg: "bg-[#6B47DE]", textColor: "text-kiddo-onDark" },
  { value: "-8",   label: "IQ points linked to excessive screen addiction",             bg: "bg-[#AAC9FA]", textColor: "text-kiddo-text" },
  { value: "53%",  label: "Higher risk of sleep disorders affecting growth & learning", bg: "bg-[#C448DF]", textColor: "text-kiddo-onDark" },
];

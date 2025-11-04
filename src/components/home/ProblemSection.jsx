


import DesktopStatGrid from "@/components/DesktopStatGrid";
import MobileStatCarousel from "@/components/MobileStatCarousel";


export default function ProblemSection(){
    return(
        <section id="problem" className="pt-4 pb-32 xl:pb-64">
                  <div className="mx-auto kiddo-container">
                    <div className="flex flex-col gap-4 justify-center items-center u-stagger">
                       <p className="u-reveal text-base font-semibold tracking-[0.18em] text-kiddo-muted uppercase text-center pt-8">
                          Telefonai blaško, konfliktai auga. 
                        </p>
                        <h2 className="u-reveal text-5xl md:text-5xl font-bold max-w-[520px] xl:max-w-6xl text-center leading-[46px] tracking-[-0.018em] xl:leading-[58px] xl:tracking-[-0.018em]">
                        Ne telefonai problema. Problema – kaip juos suvaldyti.
                        </h2>
                        <p className="u-reveal text-kiddo-muted text-center leading-7 tracking-[-0.003em] text-lg md:text-xl">
                          Mokytojai pavargę nuo telefono ginčų, tėvai nori ryšio. Abi pusės laimi su „Kidcan“.
                        </p>
                    </div>
                      <MobileStatCarousel items={stats} />
                      <DesktopStatGrid items={stats} />
                    
            
                  </div>
                </section>
    );
}


const stats = [
  { value: "68%",  label: "Tėvai nerimauja, kai vaikas be telefono negali atsiliepti.",            bg: "bg-[#FCE88D]", textColor: "text-kiddo-text" },
  { value: "57%", label: "Mokytojai pripažįsta, kad telefonų rinkimas sukelia konfliktų.",                bg: "bg-[#6B47DE]", textColor: "text-kiddo-onDark" },
  { value: "3x",   label: "Daugiau susikaupimo klasėse, kur galioja automatinis telefono režimas.",             bg: "bg-[#AAC9FA]", textColor: "text-kiddo-text" },
  { value: "95%",  label: "Moksleivių sutinka, kad „mažiau triukšmo = geresnė pamoka“.", bg: "bg-[#C448DF]", textColor: "text-kiddo-onDark" },
];

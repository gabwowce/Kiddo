import Link from "next/link";

export default function JoinMovementCta(){

    return(

        <section className="pt-0 xl:pt-112 pb-24 xl:pb-156">
          <div className="mx-auto max-w-5xl text-center  px-8 md:u-stagger">
            <h2 className="u-reveal text-5xl md:text-6xl font-extrabold leading-[58px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em]">
              Ramūs tėvai. Susikaupę vaikai.  
              
               Prisijunkite prie bendruomenės, kuri vertina realų ryšį.
            </h2>

            <p className="u-reveal mt-4 md:mt-8 text-kiddo-muted mx-auto text-xl max-w-[600px]">
              Tai daugiau nei telefono ribojimas – tai judėjimas už ramesnius, labiau susitelkusius vaikus ir mokytojus.
            </p>

            <div className="u-reveal my-12 md:my-16">
             
              <Link
                  href={{
    pathname: "/survey",
    query: {
      source: "homepage-hero",
      audience: "schools",
      utm_source: "website",
      utm_medium: "cta",
      utm_campaign: "offer",
    },
  }}
                  className="inline-flex items-center justify-center bg-kiddo-brand2 px-5 py-3 text-white font-bold hover:bg-kiddo-brand2/80 w-full max-w-[250px] text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-6 tracking-0"
                >
                  Gauti pasiulymą
                </Link>
            </div>

            {/* perks row */}
            <ul className="mt-6 flex flex-wrap md:items-center md:justify-center gap-x-8 gap-y-3 text-sm text-kiddo-muted md:u-stagger">
              <li className="inline-flex items-center gap-2 md:u-reveal">
                <span className="h-2.5 w-2.5 rounded-full bg-[#97E0AA]" aria-hidden="true"></span>
                🌱 Ankstyva prieiga
              </li>
              <li className="inline-flex items-center gap-2 md:u-reveal">
                <span className="h-2.5 w-2.5 rounded-full bg-[#97E0AA]" aria-hidden="true"></span>
                📬 Dalyvaukite apklausose
              </li>
              <li className="inline-flex items-center gap-2 md:u-reveal">
                <span className="h-2.5 w-2.5 rounded-full bg-[#97E0AA]" aria-hidden="true"></span>
                🎁 Gaukite išskirtinius pasiūlymus
              </li>
            </ul>
          </div>
        </section>

    );
}
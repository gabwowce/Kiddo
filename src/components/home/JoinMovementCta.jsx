import Link from "next/link";

export default function JoinMovementCta(){

    return(

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

    );
}
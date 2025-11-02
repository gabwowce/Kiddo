
import ChallengeItem from "@/components/ChallengeItem";

export default function ReplacePunishmentSection  (){
    return(

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
    );
}
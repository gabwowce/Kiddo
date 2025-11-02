import BattleItem from "@/components/BattleItem";

export default function DailyBattlesSection (){
    return(
 
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
               )
}
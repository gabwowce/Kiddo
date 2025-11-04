import BattleItem from "@/components/BattleItem";

export default function DailyBattlesSection (){
    return(
 
              <section className="mb-4 pt-32 xl:pt-64">
                 <div className="mx-auto kiddo-container">
                   <div className="grid gap-16 lg:grid-cols-2 items-center">
                     {/* Left column */}
                     <div className="u-stagger">
                       <h2 className="u-reveal text-5xl xl:text-6xl font-bold leading-[46px] tracking-[-0.018em] xl:leading-[63px] xl:tracking-[-0.018em]">
                         Pavargę nuo kasdienių kovų klasėje?
                       </h2>
       
                       <div className="u-stagger rounded-2xl bg-[#F5F5F5] py-25 my-9 h-full flex lg:hidden items-center justify-center">
                         <span className="text-7xl md:text-8xl u-reveal">😫</span>
                       </div>
       
                      <ul className="lg:mt-8 space-y-10 u-stagger">
                        <BattleItem
                            icon="😤"
                            iconLabel="Face with steam from nose"
                            title="Tas pats prašymas, kiekvieną dieną"
                            text="„Padėkite telefonus, prašau.“ Po penkių minučių – bzz ir dėmesys vėl dingsta."
                        />
                        <BattleItem
                            icon="😌"
                            iconLabel="Relieved face"
                            title="Galiausiai pasiduodate"
                            text="Pamokos ritmas lūžta, laikas tirpsta, o energija keliauja į drausminimą, ne į mokymą."
                        />
                        <BattleItem
                            icon="😓"
                            iconLabel="Downcast face with sweat"
                            title="Įtampa tarp visų"
                            text="Mokiniai jaučiasi sekami, mokytojai – griežti, tėvai nerimauja, kai negali prisiskambinti."
                        />
                        </ul>


       
                       <div className="mt-12 u-stagger">
                         <p className="font-bold text-xl leading-6 tracking-[-0.003em] u-reveal">Tai neturi būti mūšis.</p>
                         <p className="text-kiddo-muted leading-6 u-reveal">
                           Aiškios taisyklės + „Kidcan“ = blaškančios programėlės nutildomos, skambučiai ir SMS – visada veikia.
                         </p>
                       </div>
                     </div>
       
                     {/* Right column – emoji card */}
                     <div className="u-stagger rounded-2xl bg-[#F5F5F5] p-8 md:p-12 h-full hidden lg:flex  items-center justify-center">
                       <span className="u-reveal text-7xl md:text-8xl">😫</span>
                     </div>
                   </div>
                 </div>
               </section>
               )
}
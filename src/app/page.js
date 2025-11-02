
import DailyBattlesSection from "@/components/home/DailyBattlesSection ";
import HeroSection from "@/components/home/HeroSection";
import HowHelpSection from "@/components/home/HowHelpSection";
import JoinMovementCta from "@/components/home/JoinMovementCta";
import ProblemSection from "@/components/home/ProblemSection";
import BenefitsUsersSection from "@/components/home/school/BenefitsUsersSection";
import ClassHelpSection from "@/components/home/school/ClassHelpSection";
import WhyNowSection from "@/components/home/school/WhyNowSection";

export default function Page() {
  return (
    <>
      <HeroSection/>
      <ProblemSection/>
      {/* <AlgorithmsSection/> */}
      <WhyNowSection/>
      <DailyBattlesSection/>
      <ClassHelpSection/>
       <BenefitsUsersSection />
      <HowHelpSection/>
     
      {/* <ReplacePunishmentSection/> */}
      <JoinMovementCta/>
    </>
  );
}



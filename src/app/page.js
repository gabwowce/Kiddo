
import AlgorithmsSection from "@/components/home/AlgorithmsSection";
import DailyBattlesSection from "@/components/home/DailyBattlesSection ";
import HeroSection from "@/components/home/HeroSection";
import HowHelpSection from "@/components/home/HowHelpSection";
import JoinMovementCta from "@/components/home/JoinMovementCta";
import ProblemSection from "@/components/home/ProblemSection";
import ReplacePunishmentSection from "@/components/home/ReplacePunishmentSection";

export default function Page() {
  return (
    <>
      <HeroSection/>
      <ProblemSection/>
      <AlgorithmsSection/>
      <DailyBattlesSection/>
      <HowHelpSection/>
      <ReplacePunishmentSection/>
      <JoinMovementCta/>
    </>
  );
}



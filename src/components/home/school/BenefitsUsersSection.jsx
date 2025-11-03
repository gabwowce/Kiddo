// components/school/BenefitsUsersSection.jsx
"use client";
import { DesktopStatGridv2 } from "@/components/DesktopStatGrid";
import MobileStatCarousel from "@/components/MobileStatCarousel";

export default function BenefitsUsersSection() {
  return (
    <section id="benefits" className="pt-32 xl:pt-64">
      <div className="kiddo-container mx-auto ">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 u-stagger">
          <h2 className="text-5xl md:text-6xl font-bold tracking-[-0.02em] u-reveal ">
            Naudos vartotojams
          </h2>
          <p className="mt-4 text-kiddo-muted text-xl u-reveal ">
            Sprendimas, kuris suteikia vertę visai mokyklos bendruomenei
          </p>
        </div>

        {/* Mokytojams */}
        <h3 className="u-reveal mt-6 text-xl md:text-2xl font-extrabold leading-7 tracking-[0.03em] text-kiddo-text uppercase">
          Mokytojams
        </h3>
        <MobileStatCarousel items={teachersStats} titleStyle="text-[32px] leading-[38px]"/>
        <DesktopStatGridv2 items={teachersStats} titleStyle="text-[32px] leading-[38px]" />

        {/* Mokinams */}
        <h3 className="u-reveal mt-6 text-xl md:text-2xl font-extrabold leading-7 tracking-[0.03em] text-kiddo-text uppercase">
          Mokinams
        </h3>
        <MobileStatCarousel items={studentsStats} titleStyle="text-[32px] leading-[38px]"/>
        <DesktopStatGridv2 items={studentsStats} titleStyle="text-[32px] leading-[38px]" />

        {/* Tėvams */}
        <h3 className="u-reveal mt-6 text-xl md:text-2xl font-extrabold leading-7 tracking-[0.03em] text-kiddo-text uppercase">
          Tėvams
        </h3>
        <MobileStatCarousel items={parentsStats} titleStyle="text-[32px] leading-[38px]"/>
        <DesktopStatGridv2 items={parentsStats} titleStyle="text-[32px] leading-[38px]" />
      </div>
    </section>
  );
}

const teachersStats = [
  {
    value: "DAUGIAU DĖMESIO MOKYMUI",
    label: "Nebereikia kas kartą prašyti mokinių padėti telefonus.",
    bg: "bg-[#6B47DE]",
    textColor: "text-kiddo-onDark",
  },
  {
    value: "MAŽIAU TRIUKŠMO PAMOKOSE",
    label: "Telefonai nutyla automatiškai pagal tvarkaraštį.",
    bg: "bg-[#FCE88D]",
    textColor: "text-kiddo-text",
  },
  {
    value: "AIŠKI TVARKA BE KONFLIKTŲ",
    label: "Taisyklės veikia pačios, nereikia jų priminti.",
    bg: "bg-[#C448DF]",
    textColor: "text-kiddo-onDark",
  },
];

const studentsStats = [
  {
    value: "DAUGIAU SUSIKAUPIMO PAMOKOSE",
    label: "Mažiau pranešimų, daugiau dėmesio mokymuisi.",
    bg: "bg-[#FCE88D]",
    textColor: "text-kiddo-text",
  },
  {
    value: "AIŠKUS REŽIMAS",
    label: "Lengvai mato, kada galima naudotis telefonu, o kada – ne.",
    bg: "bg-[#6B47DE]",
    textColor: "text-kiddo-onDark",
  },
  {
    value: "MAŽIAU SOCIALINIO SPAUDIMO",
    label: "Visi klasėje „off“, todėl lengviau atsiriboti nuo blaškymosi.",
    bg: "bg-[#AAC9FA]",
    textColor: "text-kiddo-text",
  },
];

const parentsStats = [
  {
    value: "RAMYBĖ IR SAUGUMAS",
    label: "Visada gali paskambinti ar parašyti vaikui, net pamokų metu.",
    bg: "bg-[#AAC9FA]",
    textColor: "text-kiddo-text",
  },
  {
    value: "MAŽIAU GINČŲ DĖL TELEFONO",
    label: "Nereikia nuolat priminti ribų ar taisyklių.",
    bg: "bg-[#C448DF]",
    textColor: "text-kiddo-onDark",
  },
  {
    value: "PASITIKĖJIMAS MOKYKLA",
    label: "Taisyklės aiškios, skaidrios ir pagarbaus pobūdžio.",
    bg: "bg-[#F3D879]",
    textColor: "text-kiddo-text",
  },
];

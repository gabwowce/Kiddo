"use client";


// Mažas pernaudojamas badge (pilkas burbulas su emoji arba ikona)
function EmojiBadge({ emoji, className = "" }) {
  return (
    <span
      className={
        "inline-flex shrink-0 aspect-square " + // ← neleidžia susispausti ir laiko kvadratą
        "h-12 w-12 md:h-14 md:w-14 items-center justify-center " +
        "rounded-full bg-white text-xl md:text-3xl leading-none " + // ← be papildomo line-height
        className
      }
    >
      {emoji}
    </span>
  );
}

// Viena kortelė dešinėje
function FeatureCard({ emoji = "✅", title, description }) {
  return (
    <li className="u-reveal rounded-2xl bg-[#F7F7F7] p-2 flex items-center gap-4 ring-1 ring-black/5 min-h-[106px]">
      <EmojiBadge emoji={emoji} />
      <div className="">
        <p className="font-bold leading-6">{title}</p>
        <p className="text-kiddo-muted text-sm leading-6">{description}</p>
      </div>
    </li>
  );
}

export default function ClassHelpSection({
  eyebrow = "NEUŽTENKA RAŠYTI TAISYKLES.",
  title = 'Kaip „Kiddo“ padės jūsų klasei ⚡',
  lead = "Vienas sprendimas, kuris palengvina kasdienybę mokytojams, tėvams ir mokiniams.",
  items = [
    {
      emoji: "🎯",
      title: "Automatinis mokyklos režimas",
      description:
        "Įsijungia pagal tvarkaraštį — nereikia rinkti telefonų ar prašyti tylos kiekvienoje pamokoje.",
    },
    {
      emoji: "☎️",
      title: "Skambučiai ir SMS lieka įjungti",
      description: "Tėvai visada gali susisiekti su savo vaikais — net pamokų metu.",
    },
    {
      emoji: "🚫",
      title: "Programėlių blokavimas pagal kategoriją",
      description:
        "Įsijungia pagal tvarkaraštį — nereikia rinkti telefonų ar prašyti tylos kiekvienoje pamokoje.",
    },
    {
      emoji: "🧠",
      title: "Išmanūs scenarijai",
      description:
        "Specialūs režimai egzaminams, bibliotekai ar išvykų metu — pritaikomi bet kokiai situacijai.",
    },
    {
      emoji: "🧑‍🏫",
      title: "Mokytojams draugiška valdymo sistema",
      description:
        "Paprastas valdymo skydelis — be techninių rūpesčių ar sudėtingų nustatymų.",
    },
    {
      emoji: "🌐",
      title: "Veikia visur",
      description:
        "iOS ir Android įrenginiuose — „School Mode“ keliauja kartu su mokiniu.",
    },
    {
      emoji: "🔒",
      title: "Privatumas pagal nutylėjimą",
      description:
        "Jokių žinučių skaitymo, vaiko sekimo ar stebėjimo — tik saugus, pagarbus valdymas.",
    },
    {
      emoji: "👨‍👩‍👧",
      title: "Bendradarbiavimas su tėvais",
      description:
        "Skaidrumas ir pasirinkimo galimybės tęsti „School Mode“ ir namuose.",
    },
  ],
}) {
  return (
    <section className="pt-32 xl:pt-64">
      <div className="kiddo-container mx-auto grid gap-10 lg:gap-16 lg:grid-cols-2 items-start">
        {/* Kairė – tekstas */}
          <div className="max-w-[680px] lg:sticky lg:top-24 xl:top-88 lg:self-start u-stagger">
              <span className="u-reveal inline-flex items-center rounded-full bg-[#F5F5F5] px-4 py-2 text-base font-semibold tracking-[0.18em] text-kiddo-muted uppercase">
                {eyebrow}
              </span>

              <h2 className="u-reveal mt-3 text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-[-0.02em]">
                {title}
              </h2>

              <p className="u-reveal mt-4 text-kiddo-muted leading-7 tracking-[-0.003em] text-lg md:text-xl">
                {lead}
              </p>
          </div>

        {/* Dešinė – kortelių sąrašas */}
        <div>
          <ul className="grid gap-8 u-stagger">
            {items.map((it, i) => (
              <FeatureCard key={i} {...it} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

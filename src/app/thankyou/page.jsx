import Link from "next/link";
export const metadata = {

  title: "Ačiū!",
  description: "Ačiū! Netrukus atsiųsime pasiūlymą į jūsų el. paštą.",
  robots: { index: true, follow: true },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[60vh] flex items-center">
      <div className="kiddo-container text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Ačiū! 🎉</h1>
        <p className="text-kiddo-muted text-lg max-w-prose mx-auto">
          Gavome jūsų užklausą. „Kidcan“ komanda susisieks su pasiūlymu per 1–2 darbo dienas.
        </p>

        <div className="mt-6">
          <Link href="/" className="inline-flex items-center justify-center bg-kiddo-brand px-5 py-3  text-white font-bold hover:bg-kiddo-brand/80 w-full max-w-[250px] 
                    text-center shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-6 tracking-0 "
                    >
            Grįžti į pradžią
          </Link>
        </div>
      </div>
    </main>
  );
}

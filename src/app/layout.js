import Header from "@/components/header/Header";
import localFont from "next/font/local";
import "./globals.css";
const Kiddo = localFont({
  src: [
    { path: "../asset/fonts/Gilroy-Medium.woff2", weight: "500", style: "normal" },
    { path: "../asset/fonts/Gilroy-Bold.woff2",   weight: "700", style: "normal" },
    { path: "../asset/fonts/Gilroy-Heavy.woff2",  weight: "900", style: "normal" },
  ],
  variable: "--font-kiddo",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Kiddo.variable}>
      <head>
        <link rel="preload" as="video" href="/media/Kiddo.webm" type="video/webm" />
      </head>
      <body className="font-sans font-medium">
        <Header />
        <main>{children}</main>
        
      </body>
    </html>
  );
}

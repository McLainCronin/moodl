import { Flamenco, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";
import Logout from "@/components/Logout";


const opensans = Open_Sans({ subsets: ["latin"] });
const flamenco = Flamenco({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Moodi",
  description: "Track your daily emotions",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="max-w-[1000px] w-full mx-auto p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={'text-lg sm:text-3xl textGradient ' + flamenco.className}>
        <Link href='/'>
          Moodi
        </Link>
      </h1>
      <Logout />
    </header>
  )

  const footer = (
    <footer className="mx-auto p-4 sm:p-8 grid place-items-center">
      <p className={'text-[#ef447d] ' + flamenco.className}>Moodi 🫶 2024</p>
    </footer>
  )

  return (
    <html lang="en">
      <Head/>
      <AuthProvider>
      <body className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800  ' + opensans.className}>
            {header}
            {children}
            {footer}
        </body>
      </AuthProvider>
    </html>
  );
}



import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabase/server";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata = {
  title: "SkillSpire Network | Build Skills. Build Your Future.",
  description:
    "SkillSpire Network helps emerging professionals build practical digital skills, real-world proof of work, and a community to grow with.",
};

export default async function RootLayout({ children }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} antialiased`}
      >
        <Navbar user={user} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GymHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <Navbar
          title = "Nazuna Nanakuza"
          mID = {100000023982942}
          listOfTags={["Health", "Fitness", "Workout","DaveTheMagicalCheeseWizard"]}
        />
        <div className="flex-1 py-14">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ThreadContextProvider } from "@/context/ThreadContext";
import { fetchBoxThreads } from "@/api";
import { ThreadCategory } from "@/types";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GymHub",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [threadsAdvice, threadsFlexing, threadsSupplement, threadsSuggested] =
    await Promise.all([
      fetchBoxThreads(ThreadCategory.ADVICE),
      fetchBoxThreads(ThreadCategory.FLEXING),
      fetchBoxThreads(ThreadCategory.SUPPLEMENT),
      fetchBoxThreads(ThreadCategory.SUGGESTED),
    ]);
  const allThreads = [
    ...threadsAdvice,
    ...threadsFlexing,
    ...threadsSupplement,
    ...threadsSuggested,
  ];
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <Navbar
          title="Nazuna Nanakuza"
          mID={100000023982942}
          listOfTags={[
            "Health",
            "Fitness",
            "Workout",
            "DaveTheMagicalCheeseWizard",
          ]}
        />
        <div className="flex-1 py-14">
          <ThreadContextProvider
            allThreads={allThreads}
            threadsAdvice={threadsAdvice}
            threadsFlexing={threadsFlexing}
            threadsSupplement={threadsSupplement}
            threadsSuggested={threadsSuggested}
          >
            {children}
          </ThreadContextProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}

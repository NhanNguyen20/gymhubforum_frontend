import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ThreadContextProvider } from "@/context/ThreadContext";
import { MemberProvider } from "@/context/MemberContext";
import { fetchBoxThreads, fetchBoxThreadsSuggest } from "@/api";
import { ThreadCategory } from "@/types";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";

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
  const [
    threadsAdvice,
    threadsFlexing,
    threadsSupplement,
    threadsSuggested,
    threadsLastpost,
  ] = await Promise.all([
    fetchBoxThreads(ThreadCategory.ADVICE),
    fetchBoxThreads(ThreadCategory.FLEXING),
    fetchBoxThreads(ThreadCategory.SUPPLEMENT),
    fetchBoxThreadsSuggest("By Algorithm"),
    fetchBoxThreadsSuggest("By PostCreation"),
  ]);
  const allThreads = [
    ...threadsAdvice,
    ...threadsFlexing,
    ...threadsSupplement,
    ...threadsSuggested,
    ...threadsLastpost,
  ];
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <Navbar
          title="Nazuna Nanakuza"
          mID={2}
          listOfTags={[
            "Health",
            "Fitness",
            "Workout",
            "DaveTheMagicalCheeseWizard",
          ]}
        />
        <div className="flex-1 py-14">
          <ConfigProvider>
            <ThreadContextProvider
              allThreads={allThreads}
              threadsAdvice={threadsAdvice}
              threadsFlexing={threadsFlexing}
              threadsSupplement={threadsSupplement}
              threadsSuggested={threadsSuggested}
              threadsLastpost={threadsLastpost}
            >
              <MemberProvider>{children}</MemberProvider>
            </ThreadContextProvider>
          </ConfigProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}

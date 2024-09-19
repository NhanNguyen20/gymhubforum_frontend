import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ThreadContextProvider } from "@/context/ThreadContext";
import { MemberProvider } from "@/context/MemberContext";
import { fetchBoxThreads, fetchBoxThreadsSuggest, getAllTags } from "@/api";
import { ThreadCategory } from "@/types";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import { sortThreads } from "@/utils";
import { TagProvider } from "@/context/TagContext";

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
    sortThreads("latest", await fetchBoxThreadsSuggest("By PostCreation")),
  ]);
  const allThreads = [
    ...threadsAdvice,
    ...threadsFlexing,
    ...threadsSupplement,
  ];

  const [tags] = await Promise.all([getAllTags()]);

  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <TagProvider tags={tags}>
          <MemberProvider>
            <NavBar />
            <div className="flex-1 pb-14 pt-28">
              <ConfigProvider>
                <ThreadContextProvider
                  allThreads={allThreads}
                  threadsAdvice={threadsAdvice}
                  threadsFlexing={threadsFlexing}
                  threadsSupplement={threadsSupplement}
                  threadsSuggested={threadsSuggested}
                  threadsLastpost={threadsLastpost}
                >
                  {children}
                </ThreadContextProvider>
              </ConfigProvider>
            </div>
            <Footer />
          </MemberProvider>
        </TagProvider>
      </body>
    </html>
  );
}

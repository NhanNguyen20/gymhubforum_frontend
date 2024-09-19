"use client";
import { createContext, useContext, FC, PropsWithChildren } from "react";
import { ThreadInfoProps } from "@/types";

interface ThreadContextType {
  threadsAdvice: ThreadInfoProps[];
  threadsFlexing: ThreadInfoProps[];
  threadsSupplement: ThreadInfoProps[];
  threadsSuggested: ThreadInfoProps[];
  threadsLastpost: ThreadInfoProps[];
  allThreads: ThreadInfoProps[];
}

export const ThreadContext = createContext<ThreadContextType>({
  threadsAdvice: [],
  threadsFlexing: [],
  threadsSupplement: [],
  threadsSuggested: [],
  threadsLastpost: [],
  allThreads: [],
} as ThreadContextType);

export const ThreadContextProvider: FC<
  PropsWithChildren<ThreadContextType>
> = ({
  children,
  allThreads,
  threadsAdvice,
  threadsFlexing,
  threadsSupplement,
  threadsLastpost,
  threadsSuggested,
}) => {
  return (
    <ThreadContext.Provider
      value={{
        allThreads,
        threadsAdvice,
        threadsFlexing,
        threadsSupplement,
        threadsSuggested,
        threadsLastpost,
      }}
    >
      {children}
    </ThreadContext.Provider>
  );
};

export const useThread = () => useContext(ThreadContext);

"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  FC,
  PropsWithChildren,
} from "react";
import { TagProps } from "@/types";
import { getAllTags } from "@/api";

interface TagContextType {
  tags: TagProps[];
  //   tagIds: number[];
}

export const TagContext = createContext<TagContextType>({
  tags: [],
  //   tagIds: [],
} as TagContextType);

export const TagProvider: FC<PropsWithChildren<TagContextType>> = ({
  children,
  tags,
}) => {
  return <TagContext.Provider value={{ tags }}>{children}</TagContext.Provider>;
};

export const useTag = () => useContext(TagContext);

"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { MemberProps } from "@/types";
import { setCookie, deleteCookie, getCookie } from "cookies-next";

interface MemberContextType {
  member: MemberProps | null;
  setMember: (member: MemberProps | null) => void;
  logout: () => void;
}

export const MemberContext = createContext<MemberContextType>({
  member: null,
  setMember: () => {},
  logout: () => {},
} as MemberContextType);

export const MemberProvider = ({ children }: { children: ReactNode }) => {
  const [member, setMemberState] = useState<MemberProps | null>(null);

  useEffect(() => {
    const cookie = getCookie("auth");
    if (cookie) {
      setMemberState(JSON.parse(cookie as string));
    }
  }, []);

  const setMember = (member: MemberProps | null) => {
    if (member) {
      setCookie("auth", JSON.stringify(member));
    } else {
      deleteCookie("auth");
    }
    setMemberState(member);
  };

  const logout = () => {
    deleteCookie("auth");
    setMemberState(null);
  };

  return (
    <MemberContext.Provider value={{ member, setMember, logout }}>
      {children}
    </MemberContext.Provider>
  );
};

export const useMember = () => useContext(MemberContext);

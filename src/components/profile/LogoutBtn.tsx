"use client";
import { useMember } from "@/context/MemberContext";
import { Button } from "antd";
import { logOut } from "@/api";
import { useRouter } from "next/navigation";

const LogoutBtn = () => {
  const router = useRouter();
  const { logout } = useMember();

  const handleLogout = async () => {
    const res = await logOut();
    logout();
    router.push("/login");
  };

  return (
    <>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default LogoutBtn;

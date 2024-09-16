"use client";
import FormGroup from "@/components/form/FormGroup";
import { MemberProps } from "@/types";
import { useMember } from "@/context/MemberContext";
import { useRouter } from "next/navigation";

function isMemberProps(obj: any): obj is MemberProps {
  return obj && typeof obj.id == "number" && typeof obj.userName == "string";
}

export default function Login({
  searchParams,
}: {
  searchParams: { redirect?: string };
}) {
  const router = useRouter();
  const { member, setMember } = useMember();
  const redirectPath = searchParams.redirect || "/";
  console.log(redirectPath);

  const handleLogin = (res: any) => {
    console.log("Login attempt:", res);
    if (res === 403) {
      console.log(member);
      alert("Failed to login!");
      window.location.reload();
    }
    if (isMemberProps(res) === true) {
      setMember(res);
      router.back();
      // router.push(redirectPath);
    }
  };

  return (
    <>
      {member === null && <FormGroup formType="login" onSubmit={handleLogin} />}
    </>
  );
}

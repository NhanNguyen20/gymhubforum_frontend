"use client";
import FormGroup from "@/components/form/FormGroup";
import { useRouter } from "next/navigation";

export default function SignUp({}) {
  const router = useRouter();

  const handleSignup = (res: number) => {
    console.log(res);
    if (res == 200) {
      router.push("/login");
    }
    return;
  };

  return (
    <>
      <FormGroup formType="signup" onSubmit={handleSignup} />
    </>
  );
}

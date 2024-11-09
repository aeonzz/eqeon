import Signin from "@/components/signin";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";

export default async function SigninPage() {
  const currentSession = await authClient.getSession();

  if (currentSession.data) redirect("/");
  return <Signin />;
}

import React from "react";
import Signin from "@/components/signin";
import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/server-session";

export default async function SigninPage() {
  const session = await getServerSession();
  if (session) redirect("/");
  return <Signin />;
}

"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import React from "react";
import { Button } from "./ui/button";
import { Session } from "@/lib/auth-type";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface UserNavProps {
  session: Session;
}

export default function UserNav({ session }: UserNavProps) {
  const [isSignOut, setIsSignOut] = React.useState<boolean>(false);
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Avatar className="size-6 rounded-md">
            <AvatarImage src={session.user.image} />
            <AvatarFallback>{session.user.name?.charAt(0)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem
          onSelect={async (e) => {
            e.preventDefault();
            setIsSignOut(true);
            await signOut({
              fetchOptions: {
                onSuccess() {
                  router.push("/");
                },
              },
            });
            setIsSignOut(false);
          }}
          disabled={isSignOut}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

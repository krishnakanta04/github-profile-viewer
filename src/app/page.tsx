"use client";
import { useState } from "react";
import Link from "next/link";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { Github, MoveRight } from "lucide-react";

export default function Home() {
  // useState for controlled username input
  const [username, setUsername] = useState<string>("");

  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-[100px]">
      <Github className="h-[100px] w-[100px]" />
      <p className="text-3xl font-bold text-center">
        Explore GitHub profiles and repositories
      </p>

      {/* username input field */}
      <Input
        value={username}
        onValueChange={setUsername}
        type="text"
        label="Enter GitHub Username to continue"
        className="w-[300px]"
      />

      {/* if username input is empty show nothing otherwise a button to continue */}
      {!!username ? (
        <Button color="primary" as={Link} href={`/profile/${username}`}>
          Continue{" "}
          <span>
            <MoveRight />
          </span>
        </Button>
      ) : null}
    </div>
  );
}

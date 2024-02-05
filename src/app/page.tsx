"use client";
import { useState } from "react";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { Github, MoveRight } from "lucide-react";

export default function Home() {
  // useState for controlled username input
  const [username, setUsername] = useState<string>("");

  return (
    <div className="flex flex-col gap-7 items-center justify-center mt-[70px] animate__animated animate__fadeIn">
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
        <Button color="primary" as={NextLink} href={`/profile/${username}`}>
          Continue{" "}
          <span>
            <MoveRight />
          </span>
        </Button>
      ) : null}

      {/* some sample data to try */}
      <div className="flex flex-col items-center gap-5">
        <p>Some sample GitHub id to explore</p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link showAnchorIcon color="primary" href="/profile/visionmedia">
            visionmedia
          </Link>
          <Link showAnchorIcon color="primary" href="/profile/nwaliaez">
            nwaliaez
          </Link>
          <Link showAnchorIcon color="primary" href="/profile/springmeyer">
            springmeyer
          </Link>
          <Link showAnchorIcon color="primary" href="/profile/fabpot">
            fabpot
          </Link>
        </div>
      </div>
    </div>
  );
}

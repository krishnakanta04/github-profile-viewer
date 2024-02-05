import Image from "next/image";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { MoveRight } from "lucide-react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

interface UserProfileProps {
  imageUrl: string;
  username: string;
  bio: string;
  repos: number;
}

export default function UserProfile({
  imageUrl,
  username,
  bio,
  repos,
}: UserProfileProps) {
  return (
    <div className="mt-[50px] flex flex-col gap-3 items-center max-w-[700px] m-auto">
      {/* User's github profile image */}
      <Image
        src={imageUrl}
        width={100}
        height={100}
        alt="user profile"
        className="rounded-full"
      />

      {/* User's profile name */}
      <p className="text-2xl font-medium">{username}</p>

      {/* Card for user's Bio */}
      <Card className="p-2 w-full">
        <CardHeader className="font-bold">Bio</CardHeader>
        <Divider />
        <CardBody>{bio}</CardBody>
      </Card>

      {/* Card for user's number of repos */}
      <Card className="p-2 w-full gap-3">
        <CardHeader className="font-bold">Number of Repositories</CardHeader>
        <Divider />

        <CardBody className="block">
          You have a total number of <span className="font-bold">{repos}</span>{" "}
          public GitHub repositories
        </CardBody>
        <Divider />
        <CardFooter className="justify-center ">
          <Button
            color="primary"
            as={Link}
            href={`/profile/${username}/repos?numberOfRepos=${repos}&page=1&perPage=10`}
          >
            Go to Repositories{" "}
            <span>
              <MoveRight />
            </span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

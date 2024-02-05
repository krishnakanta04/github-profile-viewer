import Image from "next/image";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { AlertCircle, Github, MoveRight } from "lucide-react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

interface RepoDetailsCardProps {
  id: number;
  name: string;
  description: string;
  repoUrl: string;
}

export default function RepoDetailsCard({
  id,
  name,
  description,
  repoUrl,
}: RepoDetailsCardProps) {
  return (
    // repos details card
    <Card key={id} className="p-2">
      <CardHeader className="text-xl font-bold">
        <h3>{name}</h3>
      </CardHeader>

      <CardBody className="font-medium">
        {/* if no description is there show a message to user */}
        {!!description ? (
          description
        ) : (
          <div className="text-red-500 flex items-center gap-2">
            <AlertCircle className="inline-block h-4 w-4" />
            <p>No Description Found</p>
          </div>
        )}
      </CardBody>

      <Divider />
      <CardFooter as={Link} href={repoUrl}>
        <Button endContent={<MoveRight strokeWidth={1} />}>
          Go to Repo in GitHub
          <Github className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

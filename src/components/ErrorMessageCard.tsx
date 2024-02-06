import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

interface ErrorMessageCardProps {
  error: {
    message: string;
    username?: string;
  };
}

export default function ErrorMessageCard({ error }: ErrorMessageCardProps) {
  return (
    <div className="mt-[100px] flex items-center justify-center">
      <Card className="max-w-[600px] p-5">
        <CardHeader>
          <h2 className="text-2xl font-bold text-red-500">
            Something went wrong <AlertCircle className="inline-flex" />
          </h2>
        </CardHeader>
        <CardBody>
          <p className="text-2xl">
            <span className="font-bold ">{error.username}</span> not found
          </p>
        </CardBody>
        <CardFooter className="gap-x-5">
          <Button
            radius="sm"
            as={Link}
            href={`/search?username=${error.username}&page=1&perPage=10`}
          >
            Search for the user
          </Button>
          <Button radius="sm" color="primary" as={Link} href="/">
            Go Back Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

"use client"; // Error components must be Client Components

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mt-[100px] flex items-center justify-center">
      <Card className="max-w-[600px] p-5">
        <CardHeader>
          <h2 className="text-4xl font-bold text-red-500">
            Something went wrong <AlertCircle className="inline-flex" />
          </h2>
        </CardHeader>
        <CardBody>
          <p className="font-bold text-2xl">{error.message}</p>
        </CardBody>
        <CardFooter className="gap-x-5">
          <Button
            radius="sm"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </Button>
          <Button radius="sm" color="primary" as={Link} href="/">
            Go Back Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

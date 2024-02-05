import PaginationBar from "@/components/PaginationBar";
import { Button, Card, CardBody, Divider } from "@nextui-org/react";
import { Github, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: {
    username: string;
    page: string;
    perPage: string;
  };
}) {
  // extracting out the queries from dynamic segment
  const { username, page, perPage } = searchParams;

  // fetch user's github profile
  const githubResponse = await fetch(
    `https://api.github.com/search/users?q=${username}&page=${page}&per_page=${perPage}`
  );

  //handling github error
  if (!githubResponse.ok) {
    const error = await githubResponse.json();
    console.log("ERROR - ", error);
    if (error.message === "Not Found") {
      throw new Error(`${username} User not found !!!`);
    } else {
      throw new Error(error.message);
    }
  }

  // extract data from response body
  const userGithubSearches = await githubResponse.json();

  return (
    <div className="space-y-[20px] mt-[20px] max-w-[500px] m-auto">
      <h2 className="text-2xl font-bold text-center">Found Repositories</h2>
      {userGithubSearches.items.map((repo: any) => (
        // user details card
        <Card key={repo.id} className="animate__animated animate__fadeIn">
          <CardBody className="flex-row items-center gap-3">
            <div>
              <Image
                src={repo.avatar_url}
                width={50}
                height={50}
                className="rounded-full"
                alt="user profile"
              />
            </div>
            <div className="space-y-2">
              <p>{repo.login}</p>
              <Button
                endContent={<MoveRight strokeWidth={1} />}
                as={Link}
                href={`/profile/${repo.login}`}
              >
                GitHub Profile Viewer
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </CardBody>
        </Card>
      ))}
      <div>
        <PaginationBar
          username={username}
          type="search"
          pageNumber={parseInt(page, 10)}
          repos={parseInt(userGithubSearches.total_count)}
        />
      </div>
    </div>
  );
}

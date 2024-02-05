import PaginationBar from "@/components/PaginationBar";
import RepoDetailsCard from "@/components/RepoDetailsCard";
import { Card, CardHeader } from "@nextui-org/card";

export default async function ReposPage({
  params,
  searchParams,
}: {
  params: { username: string };
  searchParams: {
    numberOfRepos: string;
    page: string;
    perPage: string;
  };
}) {
  // get username from url using dynamic segment
  const { username } = params;
  const { numberOfRepos, page, perPage } = searchParams;

  // fetch user's github profile
  const githubResponse = await fetch(
    `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`
  );

  // extract data from response body
  const userGithubRepos = await githubResponse.json();

  return (
    <div className="space-y-[20px] mt-[20px] max-w-[500px] m-auto">
      {userGithubRepos.map((repo: any) => (
        <RepoDetailsCard
          id={repo.id}
          name={repo.name}
          description={repo.description}
          repoUrl={repo.html_url}
        />
      ))}
      <div>
        <PaginationBar
          pageNumber={parseInt(page, 10)}
          repos={parseInt(numberOfRepos)}
        />
      </div>
    </div>
  );
}

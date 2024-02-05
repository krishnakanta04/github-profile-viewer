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
    <div>
      {userGithubRepos.map((repo: any) => (
        <Card key={repo.id}>
          <CardHeader>{repo.id}</CardHeader>
        </Card>
      ))}
    </div>
  );
}

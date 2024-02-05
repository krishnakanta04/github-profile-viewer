import PaginationBar from "@/components/PaginationBar";
import RepoDetailsCard from "@/components/RepoDetailsCard";

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
  console.log(numberOfRepos);
  const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));
  // fetch user's github profile
  const githubResponse = await fetch(
    `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`
  );

  delay(10000);
  //handling github error
  if (!githubResponse.ok) {
    const error = await githubResponse.json();
    console.log("ERROR - ", error);
    throw new Error(error.message);
  }

  // extract data from response body
  const userGithubRepos = await githubResponse.json();

  return (
    <div className="space-y-[20px] mt-[20px] max-w-[500px] m-auto">
      <h2 className="text-2xl font-bold text-center">Your Repositories</h2>
      {userGithubRepos.map((repo: any) => (
        <RepoDetailsCard
          key={repo.id}
          id={repo.id}
          name={repo.name}
          description={repo.description}
          repoUrl={repo.html_url}
        />
      ))}
      <div>
        <PaginationBar
          username={username}
          pageNumber={parseInt(page, 10)}
          repos={parseInt(numberOfRepos)}
        />
      </div>
    </div>
  );
}

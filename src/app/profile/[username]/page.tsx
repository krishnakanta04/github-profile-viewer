import ErrorMessageCard from "@/components/ErrorMessageCard";
import UserProfile from "@/components/UserProfile";

export default async function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
  // get username from url using dynamic segment
  const { username } = params;

  // fetch user's github profile
  const githubResponse = await fetch(
    `https://api.github.com/users/${username}`
  );

  //handling github error
  if (!githubResponse.ok) {
    const error = await githubResponse.json();
    console.log("ERROR - ", error);
    if (error.message === "Not Found") {
      const errorDetails = { message: error.message, username: username };
      return <ErrorMessageCard error={errorDetails} />;
    } else {
      throw new Error(error.message);
    }
  }

  // extract data from response body
  const userGithubProfile = await githubResponse.json();

  return (
    // passing neccessary data to UserProfile Component
    <UserProfile
      imageUrl={userGithubProfile.avatar_url}
      username={userGithubProfile.login}
      bio={userGithubProfile.bio}
      repos={userGithubProfile.public_repos}
    />
  );
}

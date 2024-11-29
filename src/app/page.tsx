import { auth } from "../auth";
import { ButtonGitHubSignIn } from "./components/Button.GitHub.SignIn";
import { GitHubUser } from "./components/GitHub.User";

export default async function Page() {
  const session = await auth();

  return (
    <div
      className={`flex h-screen items-center justify-center ${
        !!session && "bg-[#1f2329]"
      }`}
    >
      {session ? <GitHubUser session={session} /> : <ButtonGitHubSignIn />}
    </div>
  );
}

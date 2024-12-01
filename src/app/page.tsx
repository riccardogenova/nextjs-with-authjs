import { auth } from "../auth";
import { ButtonGitHub } from "./components/buttons/Button.GitHub";
import { ButtonGoogle } from "./components/buttons/Button.Google";
import { UserDetail } from "./components/User.Detail";

export default async function Page() {
  const session = await auth();

  return (
    <div
      className={`flex h-screen items-center justify-center ${
        !!session && "bg-[#1f2329]"
      }`}
    >
      {session ? (
        <UserDetail session={session} />
      ) : (
        <div className="flex space-x-4">
          <ButtonGitHub />
          <ButtonGoogle />
        </div>
      )}
    </div>
  );
}

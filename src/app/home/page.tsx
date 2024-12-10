import { actionUserMe } from "../../actions/auth.me";
import { actionUserGistList } from "../../actions/user.gist";
import { ButtonLogout } from "../../components/Button.Logout";
import Image from "next/image";
import { utilityParseExternalGist } from "../../helpers/gists";
import { GistList } from "../../components/Gists";
import { actionRepositoryList } from "../../actions/repository.list";
import { Searchbar } from "../../components/Searchbar";

export default async function Home() {
  const user = await actionUserMe();
  const gists = await actionUserGistList(user.login);
  const formattedGists = await utilityParseExternalGist(gists);
  const repositories = await actionRepositoryList();
  console.log({ repositories });

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <Searchbar />
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header con avatar e nome */}
        <div className="bg-gray-800 text-white text-center py-6">
          <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-gray-300">
            <Image
              src={user.avatar_url}
              alt={`${user.name}'s Avatar`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className="text-2xl font-bold mt-4">{user.name}</h1>
          <p className="text-sm text-gray-300">{user.bio || "No bio available"}</p>
        </div>

        {/* Informazioni dell'utente */}
        <div className="p-6">
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span className="font-medium text-gray-600">Username:</span>
              <span className="text-gray-900">{user.login}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium text-gray-600">Email:</span>
              <span className="text-gray-900">{user.email || "Not available"}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium text-gray-600">Location:</span>
              <span className="text-gray-900">{user.location || "Not available"}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium text-gray-600">Company:</span>
              <span className="text-gray-900">{user.company || "Not available"}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium text-gray-600">Blog:</span>
              <a
                href={`https://${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {user.blog || "Not available"}
              </a>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium text-gray-600">Followers:</span>
              <span className="text-gray-900">{user.followers}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium text-gray-600">Following:</span>
              <span className="text-gray-900">{user.following}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium text-gray-600">Public Repositories:</span>
              <span className="text-gray-900">{user.public_repos}</span>
            </li>
          </ul>
        </div>
        <GistList gists={formattedGists} />
        {/* Logout Button */}
        <div className="p-6 text-center">
          <ButtonLogout />
        </div>
      </div>
    </div>
  );
}

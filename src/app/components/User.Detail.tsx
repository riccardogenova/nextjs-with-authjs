import { actionLogout } from "../../actions";
import Image from "next/image";
import { Session } from "next-auth";

interface Props {
  session: Session;
}

export const UserDetail = ({ session }: Props) => (
  <div className="flex flex-col items-center text-white p-4  max-w-md mx-auto">
    <div className="rounded-full border-2 border-white pl-2 pr-6 py-2">
      <div className="flex items-center gap-4 w-full">
        {session.user?.image && (
          <Image
            src={session.user.image}
            alt={session.user.name || ""}
            width={50}
            height={50}
            className="rounded-full border-2 border-white"
          />
        )}
        <div>
          <h1 className="text-lg font-bold">{session.user?.name}</h1>
          <p className="text-sm text-gray-400">{session.user?.email}</p>
        </div>
      </div>
    </div>
    <button
      onClick={actionLogout}
      className="mt-4 px-4 py-2 bg-white text-black font-bold rounded-md hover:opacity-90"
    >
      Esci
    </button>
  </div>
);

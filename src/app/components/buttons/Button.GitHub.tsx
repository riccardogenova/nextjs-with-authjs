import { FaGithub } from "react-icons/fa";
import { actionLoginGitHub } from "../../../actions";

export const ButtonGitHub = () => {
  return (
    <form action={actionLoginGitHub}>
      <button
        type="submit"
        className="flex items-center gap-2 px-4 py-2 bg-[#1f2329] text-white font-bold rounded-md hover:opacity-90 focus:outline-none"
      >
        <FaGithub className="text-2xl" />
        Signin with GitHub
      </button>
    </form>
  );
};

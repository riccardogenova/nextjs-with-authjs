import { FaGithub } from "react-icons/fa";

export const ButtonLogin = () => {
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.AUTH_GITHUB_ID}&redirect_uri=${process.env.BASE_URL}/api/auth/signin`}
      type="submit"
      className="flex items-center gap-2 px-4 py-2 bg-[#1f2329] text-white font-bold rounded-md hover:opacity-90 focus:outline-none"
    >
      <FaGithub className="text-2xl" />
      Signin with GitHub
    </a>
  );
};

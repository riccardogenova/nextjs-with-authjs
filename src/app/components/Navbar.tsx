import { FaGithub } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="w-full bg-[#282c34] mx-auto text-gray-300 py-2 px-8 flex justify-between items-center shadow-md">
      <h1 className="text-md font-mono tracking-wide text-gray-100">
        GitHub Auth with NextJS
      </h1>
      <a
        href="https://github.com/riccardogenova/next-github-auth"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-[#a6e22e] transition-colors text-2xl"
        aria-label="GitHub Repository"
      >
        <FaGithub />
      </a>
    </nav>
  );
};

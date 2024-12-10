export const Navbar = () => {
  return (
    <nav className="w-full bg-[#282c34] mx-auto text-gray-300 py-2 px-8 flex justify-between items-center shadow-md">
      <h1 className="text-md font-mono tracking-wide text-gray-100">
        NextJS authentication example with{" "}
        <a
          href="https://authjs.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-90"
        >
          Auth.js
        </a>
      </h1>
    </nav>
  );
};

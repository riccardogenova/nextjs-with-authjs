import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

export const ButtonLogout = () => {
  return (
    <Link
      href="/auth/signout"
      className="flex items-center gap-2 px-4 py-2 bg-[#24292e] text-white font-semibold rounded-md border border-[#444d56] shadow-sm hover:bg-[#30363d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#444d56] transition duration-150"
    >
      <FaSignOutAlt className="text-xl" />
      Esci
    </Link>
  );
};

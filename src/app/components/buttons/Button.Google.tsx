import { FaGoogle } from "react-icons/fa";
import { actionLoginGoogle } from "../../../actions";

export const ButtonGoogle = () => {
  return (
    <form action={actionLoginGoogle}>
      <button
        type="submit"
        className="flex items-center gap-2 px-4 py-2 bg-[#4285F4] text-white font-bold rounded-md hover:opacity-90 focus:outline-none"
      >
        <FaGoogle className="text-2xl" />
        Signin with Google
      </button>
    </form>
  );
};

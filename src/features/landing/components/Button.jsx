import { Link } from "react-router";

function Button() {
  return (
    <Link
      to="/login"
      className="mt-4 cursor-pointer rounded-md border-[1px] border-blue-600 px-4 py-1 font-medium text-blue-600 uppercase duration-150 hover:bg-blue-600 hover:text-stone-100 md:self-start md:text-xl"
    >
      Start Now
    </Link>
  );
}

export { Button };

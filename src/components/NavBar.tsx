import { AiFillHome } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-2 justify-between items-center p-5 bg-gray-300 px-4">
      <ul className="flex w-full items-center justify-evenly">
        <li>
          <Link href="/">
            <AiFillHome size={25} aria-label="Home" />
          </Link>
        </li>
        <li>
          <Link href="/configuration">
            <FaMagnifyingGlass size={25} aria-label="Search" />
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <IoMdPerson size={25} aria-label="Profile" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

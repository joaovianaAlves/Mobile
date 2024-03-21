import { AiFillHome } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-300 p-5 flex justify-center">
      <ul className="flex gap-32">
        <li>
          <Link href="/">
            <span
              className="text-gray-600 hover:text-gray-900"
              aria-label="Home"
            >
              <AiFillHome size={25} />
            </span>
          </Link>
        </li>
        <li>
          <Link href="/complete">
            <span
              className="text-gray-600 hover:text-gray-900"
              aria-label="Profile"
            >
              <IoMdPerson size={25} />
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

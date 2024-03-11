import { AiFillHome } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function NavBar() {
  return (
    <nav className="flex gap-2 justify-between items-center p-5 bg-gray-300 px-4">
      <ul className="flex w-full items-center justify-evenly">
        <li>
          <a href="" className="font-bold" title="Previous">
            <AiFillHome size={25} aria-label="Home" />
          </a>
        </li>
        <li>
          <a href="" className="font-bold" title="Home">
            <FaMagnifyingGlass size={25} aria-label="Search" />
          </a>
        </li>
        <li>
          <a href="" className="font-bold" title="Search">
            <IoMdPerson size={25} aria-label="Home" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

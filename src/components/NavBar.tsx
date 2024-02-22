import Image from "../../node_modules/next/image";
import { LiaHomeSolid } from "react-icons/lia";
import { CiSquarePlus } from "react-icons/ci";

export default function NavBar() {
  return (
    <header className="flex gap-2 justify-between items-center p-2 bg-slate-100 px-6">
      <div className="flex gap-4 items-center">
        <Image src={"/Logo.svg"} alt="" width={30} height={30} />
        <h1>Lorem ipsum</h1>
      </div>
      <nav>
        <ul className="flex gap-3 items-center justify-center">
          <li>
            <a href="" className="font-bold">
              <LiaHomeSolid size={25} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

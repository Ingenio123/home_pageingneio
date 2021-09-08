import HeaderItems from "./HeaderItems";
import { HiOutlineHome, HiOutlineMusicNote } from "react-icons/hi";
import { GiSoccerBall } from "react-icons/gi";
import { BsNewspaper } from "react-icons/bs";
import { IoGameControllerOutline, IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 z-50 w-full bg-gray-700">
      <nav className="container flex items-center py-3 ">
        <div className="py-1 text-white">
          <img src="/logohero.png" alt="Logo" width="100" height="80" />
        </div>
        <ul className="items-center justify-end flex-1 hidden gap-12 text-xs text-blue-500 uppercase sm:flex">
          <HeaderItems title="HOME" Icon={HiOutlineHome} destino="/" />

          <HeaderItems
            title="JUEGOS"
            Icon={IoGameControllerOutline}
            destino="/juegos"
          />

          <HeaderItems
            title="DEPORTES"
            Icon={GiSoccerBall}
            destino="/deportes"
          />

          <HeaderItems
            title="MUSICA"
            Icon={HiOutlineMusicNote}
            destino="/musica"
          />

          <HeaderItems
            title="NOTICIAS"
            Icon={BsNewspaper}
            destino="/noticias"
          />

          <button className="py-1 text-base text-white text-gray-600 uppercase bg-white rounded-md px-7">
            Button
          </button>
        </ul>
        <div className="flex justify-end flex-1 sm:hidden">
          <IoMenu className="text-3xl text-white cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}

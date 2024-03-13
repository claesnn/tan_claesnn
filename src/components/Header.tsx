import { Link } from "@tanstack/react-router";
import { useState } from "react";
import SvgMenu from "./svg/SvgMenu";
import SvgClose from "./svg/SvgClose";
import { Button } from "./ui/button";

const links = [
  {
    name: "Blog",
    route: "/blog",
  },
  {
    name: "Software",
    route: "/software",
  },
  {
    name: "Photography",
    route: "/photography",
  },
  {
    name: "About",
    route: "/about",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = "visible";
  }

  function toggleMenu() {
    document.body.style.overflow = menuOpen ? "visible" : "hidden";
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header className="flex justify-between px-4 py-2 place-items-center max-w-7xl mx-auto">
        <Link to="/">
          <h1 className="font-[Oswald] text-2xl" onClick={closeMenu}>
            CLAESNN
          </h1>
        </Link>

        <button onClick={toggleMenu} className="sm:hidden">
          {!menuOpen ? <SvgMenu /> : <SvgClose />}
        </button>

        <nav className="hidden gap-4 sm:flex">
          {links.map((link) => (
            <Link to={link.route} className="[&.active]:underline text-sm">
              {link.name}
            </Link>
          ))}
        </nav>
      </header>
      {menuOpen && (
        <nav className="w-full z-10 fixed top-[50px] flex">
          <div
            onClick={closeMenu}
            className=" bg-gray-900 h-screen flex-grow opacity-40"
          ></div>
          <aside className="w-[20rem] bg-white h-screen p-3 flex flex-col">
            <Link to="/about">
              <Button
                variant="link"
                className="[&.active]:underline text-foreground text-lg "
                onClick={closeMenu}
              >
                About
              </Button>
            </Link>
            <Link to="/photography">
              <Button
                variant="link"
                className="[&.active]:underline text-foreground text-lg"
                onClick={closeMenu}
              >
                Photography
              </Button>
            </Link>
          </aside>
        </nav>
      )}
      <hr />
    </>
  );
}

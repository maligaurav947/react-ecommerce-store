import React from "react";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdWavingHand } from "react-icons/md";
import { signInWithGoogle } from "./../DB/Firebase";
export default function Navbar({}) {
  const [account, setAccount] = React.useState(false);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className=" flex flex-wrap items-center justify-between px-2 text-black bg-white sticky top-0  py-3 mb-3"
        style={{
          zIndex: "999999",
        }}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              GABBAR CLUB
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <GoThreeBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug hover:opacity-75"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/product"
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:opacity-75"
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:opacity-75"
                  href="https://maligaurav947.github.io/Portfolio/"
                  target={"_blank"}
                >
                  About Me
                </a>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:opacity-75"
                  target={"_blank"}
                >
                  Contact
                </Link>
              </li>
              <li
                className="nav-item cursor-pointer"
                onClick={() => {
                  signInWithGoogle();
                  setAccount(!account);
                }}
              >
                <a className="px-3 py-2 flex items-center text-sm uppercase gap-2 font-bold leading-snug  hover:opacity-75">
                  {!account ? (
                    <>
                      <FcGoogle size={15} />
                      Login With Google
                    </>
                  ) : (
                    <>
                      <MdWavingHand size={15} /> {/* */}{" "}
                      {sessionStorage.getItem("name")}
                    </>
                  )}
                </a>
              </li>
              {account ? (
                <li
                  className="nav-item cursor-pointer"
                  onClick={() => {
                    setAccount(!account);
                  }}
                >
                  <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:opacity-75">
                    Log out
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

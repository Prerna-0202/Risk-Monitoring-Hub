import Image from "next/image";
import Profile from "../assets/profileImage.svg";
import { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/Close.svg";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const openSideBar = () => setOpen(true);
  const closeSidebar = () => setOpen(false);
  return (
    <>
      <div
        className={`md:hidden ${
          open ? "hidden" : "block"
        } bg-white z-50 p-2 fixed top-5 right-4 rounded-sm`}
        onClick={openSideBar}
      >
        <Image src={hamburger} width={24} alt="open" />
      </div>
      <div
        className={`bg-white z-50 fixed flex transition-all md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        data-dev-hint="container"
      >
        <aside
          id="sidebar"
          className="border-2 min-h-screen w-4/3 md:w-72 space-y-6 pt-6 px-0 flex flex-col justify-between"
          data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
        >
          <div
            className="flex flex-col  space-y-20"
            data-dev-hint="optional div for having an extra footer navigation"
          >
            <a href="#" className="flex items-center space-x-2 px-4" title="">
              <span className="text-2xl font-extrabold whitespace-nowrap truncate">
                Risk Monitor Hub
              </span>
              <div className={"md:hidden block"} onClick={closeSidebar}>
              <Image src={close} alt="close" width={24} />
              </div>
            </a>

            <nav data-dev-hint="main navigation">
              <a
                href="#"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200  hover:bg-blue-100 hover:text-blue-700 font-semibold hover:font-bold"
              >
                <span>Overview</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-blue-100 hover:text-blue-700 hover:font-bold font-semibold"
              >
                <span>Onboarding</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200  bg-blue-100 text-blue-700 font-bold"
              >
                <span>Monitoring</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-blue-100 hover:text-blue-700 hover:font-bold font-semibold"
              >
                <span>Flagging</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200  hover:bg-blue-100 hover:text-blue-700 hover:font-bold font-semibold"
              >
                <span>Source of Income</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 py-2 px-4 transition duration-200  hover:bg-blue-100 hover:text-blue-700 hover:font-bold font-semibold"
              >
                <span>UAR</span>
              </a>
            </nav>
          </div>
          <div className="flex justify-center text-gray-900 gap-3 flex-col pb-5 pl-5">
            <div className="flex justify-start items-center">
              <Image
                src={Profile}
                width={64}
                height={64}
                className="w-12 mr-2 rounded-full"
                alt="profile"
              />
              Elon Musk <br/> elon@twitter.com
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;

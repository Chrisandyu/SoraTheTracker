import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 fixed w-full z-10 top-0">
      <div className="flex-1">
       
        <Link href="/" className="btn btn-ghost text-xl ml-4">
            <img src="/logo.png" className="h-7 mb-1" />
          {" "}
          Sora Tracker{" "}
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="https://www.youtube.com/watch?v=mQGuT4EOats" target="_blank" >Stream</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li className="hidden md:block">
            <Link href="https://www.youtube.com/@sorathetroll" target="_blank">Youtube</Link>
          </li>
          <li className="hidden md:block">
            <Link href="https://github.com/Chrisandyu/SoraTheTracker" target="_blank">Github</Link>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = (): React.JSX.Element => {
  return (
    <div>
      <nav className="flex h-16 bg-blue-700 text-white items-center justify-between w-full px-4 md:px-72">
        <span className="font-bold text-xl">JobBoardly</span>
        <div className="flex items-center gap-2 md:gap-6">
          <Link to="/jobs">Browse Jobs</Link>
          <button className="bg-blue-800 px-2 py-1 rounded-full">
            Jobs Applied: 0
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;

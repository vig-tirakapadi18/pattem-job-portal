import React from "react";
import { Link, Outlet } from "react-router-dom";
import useJobContext from "../hooks/useJobContext";

const Layout = (): React.JSX.Element => {
  const jobCtx = useJobContext();

  return (
    <div>
      <nav className="flex h-16 bg-blue-700 text-white items-center justify-between w-full px-4 md:px-72">
        <Link to="/" className="font-bold text-xl">
          JobBoardly
        </Link>
        <div className="flex items-center gap-2 md:gap-6">
          <Link to="/jobs">Browse Jobs</Link>
          <span className="bg-blue-800 px-2 py-1 rounded-full">
            Jobs Applied: {jobCtx?.appliedCount}
          </span>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;

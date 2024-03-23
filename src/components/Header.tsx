import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import "./Header.css"; // Import CSS file

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-blue-400 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="logo font-lobster text-3xl text-white font-bold tracking-tight">
          <Link to="/" className="text-white">
            BeyondHorizon
          </Link>
        </h1>
        <div className="nav-links">
          {isLoggedIn ? (
            <>
              <Link to="/my-bookings" className="nav-link">
                My Bookings
              </Link>
              <Link to="/my-hotels" className="nav-link">
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className=" nav-link bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-500 px-3 py-2"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

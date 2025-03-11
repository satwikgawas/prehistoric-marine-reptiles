import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Prehistoric Marine Reptiles</h1>
          <Link to="/" className="text-lg">
            Home
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

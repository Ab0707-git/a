import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-black text-white p-4 flex space-x-4">
    <Link to="/">APOD</Link>
    {/* <Link to="/mars">Mars</Link> */}
  </nav>
);

export default Navbar;

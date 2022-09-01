import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">HOME</Link>
      <Link to="/starredrepo">Most Starred Repo</Link>
      <Link to="/">HOME</Link>
      <Link to="/">HOME</Link>
    </div>
  );
};

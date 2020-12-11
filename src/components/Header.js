import React, { useState, useContext } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import { FirebaseContext } from "./fbAuth/FirebaseProvider";

export const Header = () => {
  const { isLoggedIn, logout } = useContext(FirebaseContext);

  return (
    <>
      <h2>Merry Christmas</h2>
      <a aria-current="page" className="nav-link"
        style={{ cursor: "pointer" }} onClick={logout}>Logout</a>

    </>
  )
}
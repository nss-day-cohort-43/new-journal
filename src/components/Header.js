import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink as RRNavLink } from "react-router-dom";
import { FirebaseContext } from "./fbAuth/FirebaseProvider";

export const Header = () => {
  const { isLoggedIn, logout } = useContext(FirebaseContext);

  return (
    <>
      <div className="header-nav">
        {isLoggedIn ? <Button onClick={logout} variant="outline-dark" size="sm">Logout</Button>
          : null}

      </div>

    </>
  )
}
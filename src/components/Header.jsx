import React from "react";
import logo from "../images/logo.svg"

function Header(){
    return <div className="container">
        <div className="title">
        <img src={logo} alt="Dollar symbol" />
        </div>
  </div>
}

export default Header;
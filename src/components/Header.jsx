import React from "react";
import logo from "../app/assets/logo.png";

function Header() {
  return (
    <div className="h-fit">
      <div className="flex flex-row-reverse">
        <img
          src={logo}
          alt="McGeorge Consulting Ltd."
          className="w-20 h-20 object-contain"
        />
      </div>
    </div>
  );
}

export default Header;

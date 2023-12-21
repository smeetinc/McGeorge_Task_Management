import React from "react";

function Header() {
  return (
    <div className="h-fit">
      <div className="flex flex-row-reverse">
        <img
          src="./logo.png"
          alt="McGeorge Consulting Ltd."
          className="w-20 h-20 object-contain"
        />
      </div>
    </div>
  );
}

export default Header;

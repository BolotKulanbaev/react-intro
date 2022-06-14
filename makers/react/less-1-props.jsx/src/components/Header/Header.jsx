import React from "react";

const Header = ({ logo }) => {
  console.log(logo);
  return (
    <div>
      <h1>Header</h1>
      <img src={logo} alt="" width="200px" />
    </div>
  );
};

export default Header;

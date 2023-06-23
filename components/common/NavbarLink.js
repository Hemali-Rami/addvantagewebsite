import React from "react";
import { Link as ScrollLink } from "react-scroll";
const NavbarLink = ({ to, children }) => {
  return (
    <ScrollLink to={to} smooth={true}>
      {children}
    </ScrollLink>
  );
};

export default NavbarLink;

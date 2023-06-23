import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 900,
      easing: "ease-out",
    });
    AOS.refresh();
  }, []);

  return <div>{children}</div>;
};

export default AOSWrapper;

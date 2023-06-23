import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useRouter } from "next/router";
const Header = ({ headerClassName }) => {
  const [sticky, setSticky] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    if (!click) {
      document.body.classList.add("wsactive");
    } else {
      document.body.classList.remove("wsactive");
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  //for other pages menu click section scrolling.
  const router = useRouter();
  const headerRef = useRef(null);

  const brandConatctformRef = useRef(null);
  const brandaddvtageRef = useRef(null);
  const brandAlldayDrRef = useRef(null);
  const brandHealthyaRef = useRef(null);
  const brandAppLocumRef = useRef(null);
  const brandPharmsmartRef = useRef(null);
  // const handleMenuItemClick = (ref) =>
  //   scroll.scrollTo(ref.current.offsetTop);
  // };
  // const handleMenuItemClick = (ref) => {
  //   if (ref && ref.current) {
  //     const offsetTop = ref.current.offsetTop;
  //     scroll.scrollTo({
  //       top: offsetTop,
  //       smooth: true,
  //       duration: 500,
  //       offset: 0,
  //     });
  //   }
  // };
  const handleMenuItemClick = (ref) => {
    if (ref) {
      localStorage.setItem("sectionRef", ref);
      console.log(localStorage);
    }

    if (window.innerWidth < 992) {
      setClick(false);
      document.body.classList.remove("wsactive");
    }
  };
  const isHomePage = router.pathname === "/";
  const isMeetTheTeamPage = router.pathname === "/meettheteam";
  return (
    <div
      id="header"
      ref={headerRef}
      className={`header tra-menu navbar-light ${sticky ? "scroll" : ""} ${
        headerClassName || ""
      }`}
    >
      <div className="header-wrapper">
        <div className="wsmobileheader clearfix">
          <span className="smllogo">
            <Image
              src="../images/logo.svg"
              width="155"
              height="36"
              alt="ADDVantage-mobile-logo"
            />
          </span>
          <button
            id="wsnavtoggle"
            className="wsanimated-arrow"
            onClick={handleClick}
          >
            <span></span>
          </button>
        </div>
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            <div className="desktoplogo">
              <Link href="/" className="logo-black">
                <Image
                  src="../images/logo.svg"
                  width="155"
                  height="36"
                  alt="ADDVantage-header-logo"
                />
              </Link>
            </div>
            <div className="desktoplogo">
              <Link href="/" className="logo-white">
                <Image
                  src="../images/logo-white.svg"
                  width="155"
                  height="36"
                  alt="ADDVantage-header-logo"
                />
              </Link>
            </div>
         
            {isHomePage && (
              <nav className="wsmenu clearfix">
                <ul className="wsmenu-list">
                  <li className="nl-simple">
                    <ScrollLink
                      to="ADDVantage-brands"
                      smooth={true}
                      className="cursor-pointer"
                      duration={500}
                      offset={0}
                      onClick={() => handleMenuItemClick()}
                    >
                      Our brands
                    </ScrollLink>
                  </li>

                  <li className="nl-simple">
                    <ScrollLink
                      to="brand-alldayDr"
                      smooth={true}
                      className="cursor-pointer"
                      duration={500}
                      offset={0}
                      onClick={() => handleMenuItemClick()}
                    >
                      AlldayDr
                    </ScrollLink>
                  </li>

                  <li className="nl-simple">
                    <ScrollLink
                      to="brand-healthya"
                      smooth={true}
                      className="cursor-pointer"
                      duration={500}
                      offset={0}
                      onClick={() => handleMenuItemClick()}
                    >
                      Healthya
                    </ScrollLink>
                  </li>

                  <li className="nl-simple">
                    <ScrollLink
                      to="brand-AppLocum"
                      smooth={true}
                      className="cursor-pointer"
                      duration={500}
                      offset={0}
                      onClick={() => handleMenuItemClick()}
                    >
                      Applocum
                    </ScrollLink>
                  </li>

                  <li className="nl-simple">
                    <ScrollLink
                      to="brand-Pharmsmart"
                      smooth={true}
                      className="cursor-pointer"
                      duration={500}
                      offset={0}
                      onClick={() => handleMenuItemClick()}
                    >
                      Pharmsmart
                    </ScrollLink>
                  </li>

                  <li className="nl-simple">
                    <ScrollLink
                      to="contacts-4"
                      smooth={true}
                      className="btn btn-tra-white primary-hover last-link"
                      duration={500}
                      offset={0}
                      onClick={() => handleMenuItemClick()}
                    >
                      Contact us
                    </ScrollLink>
                  </li>
                </ul>
              </nav>
            )}
            {isMeetTheTeamPage && (
              <nav className="wsmenu clearfix">
                <ul className="wsmenu-list">
                  <li className="nl-simple">
                    <Link href="/" className="cursor-pointer">
                      Our brands
                    </Link>
                  </li>

                  <li className="nl-simple">
                    <Link
                      href="/"
                      className="cursor-pointer"
                      onClick={() => handleMenuItemClick("brandAlldayDrRef")}
                    >
                      AlldayDr
                    </Link>
                  </li>

                  <li className="nl-simple">
                    <Link
                      href="/"
                      className="cursor-pointer"
                      onClick={() => handleMenuItemClick("brandHealthyaRef")}
                    >
                      Healthya
                    </Link>
                  </li>

                  <li className="nl-simple">
                    <Link
                      href="/"
                      className="cursor-pointer"
                      onClick={() => handleMenuItemClick("brandAppLocumRef")}
                    >
                      Applocum
                    </Link>
                  </li>

                  <li className="nl-simple">
                    <Link
                      href="/"
                      className="cursor-pointer"
                      onClick={() => handleMenuItemClick("brandPharmsmartRef")}
                    >
                      Pharmsmart
                    </Link>
                  </li>

                  <li className="nl-simple">
                    <ScrollLink
                      to="contacts-4"
                      smooth={true}
                      className="btn btn-tra-white primary-hover last-link"
                      duration={500}
                      offset={0}
                      onClick={() => handleMenuItemClick()}
                    >
                      Contact us
                    </ScrollLink>
                  </li>
                </ul>
              </nav>
            )}
            {!isHomePage && !isMeetTheTeamPage && (
              <nav className="wsmenu clearfix">
                <ul className="wsmenu-list">
                  <li className="nl-simple">
                    <Link href="/" className="cursor-pointer">
                      Our brands
                    </Link>
                  </li>

                  <li className="nl-simple">
                    <Link
                      href="/"
                      className="cursor-pointer"
                      onClick={() => handleMenuItemClick("brandAlldayDrRef")}
                    >
                      AlldayDr
                    </Link>
                  </li>

                  <li className="nl-simple">
                    <Link
                      href="/"
                      className="cursor-pointer"
                      onClick={() => handleMenuItemClick("brandHealthyaRef")}
                    >
                      Healthya
                    </Link>
                  </li>

                  <li className="nl-simple">
                    <Link
                      href="/"
                      className="cursor-pointer"
                      onClick={() => handleMenuItemClick("brandAppLocumRef")}
                    >
                      Applocum
                    </Link>
                  </li>

                  <li className="nl-simple">
                    <Link
                      href="/"
                      className="cursor-pointer"
                      onClick={() => handleMenuItemClick("brandPharmsmartRef")}
                    >
                      Pharmsmart
                    </Link>
                  </li>

                  <li className="nl-simple">
                    <Link
                      href="/"
                      className="btn btn-tra-white primary-hover last-link"
                      onClick={() => handleMenuItemClick("brandConatctformRef")}
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

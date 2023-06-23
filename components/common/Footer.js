import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = window.pageYOffset;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <footer id="footer-5" className="footer division">
      <div className="container">
        {/* <!-- FOOTER CONTENT --> */}
        <div className="row">
          {/* <!-- FOOTER INFO --> */}
          <div className="col-lg-5 col-xl-4">
            <div className="footer-info mb-40">
              {/* <!-- For Retina Ready displays take a image with double the amount of pixels that your image will be  */}
              {/* displayed (e.g 350 x 82  pixels) --> */}
              <Link href="#ADDVantage-brands" className="logo-black">
                <Image
                  src="/images/logo.svg"
                  width={175}
                  height={41}
                  alt="ADDVantage-footer-logo"
                />
              </Link>

              {/* <!-- Text --> */}
              <p className="grey-color mt-25">
                Providing digital solutions for all your healthcare needs. We
                are experts in our field in creating bespoke, secure, intuitive
                technology solutions in the health space.
              </p>
            </div>
          </div>

          {/* <!-- FOOTER LINKS --> */}
          <div className="col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              {/* <!-- Title --> */}
              <h6 className="h6-lg">Quick links</h6>

              {/* <!-- Footer Links --> */}
              <ul className="clearfix grey-color">
                <li>
                  <p>
                    <Link href="https://www.alldaydr.com">alldayDr</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="https://healthya.co.uk">healthya</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="https://www.applocum.com">Applocum</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="https://pharmsmart.co.uk">Pharmsmart</Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link href="https://minds.addvantage-technologies.co.uk/">
                      ADDVantage Minds
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- FOOTER PRODUCTS LINKS --> */}
          <div className="col-md-7 col-lg-7 col-xl-4">
            <div className="footer-links mb-40">
              {/* <!-- Title --> */}
              <h6 className="h6-lg">Contact details</h6>

              {/* <!-- Footer List --> */}
              <ul className="clearfix grey-color">
                <li>
                  <p>
                    <i className="fa fa-phone text-dark-gray phone font-22 fa-lg margin-right-5"></i>
                    0208 016 6020
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-envelope text-dark-gray envelope font-22 fa-lg margin-right-5"></i>

                    <Link
                      href="mailto:Info@addvantage-technologies.co.uk"
                      style={{ color: "violet" }}
                    >
                      Info@addvantage-technologies.co.uk
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fa fa-location-arrow text-dark-gray arrow font-22 fa-lg margin-right-5"></i>
                    Clive House, Clive Street, Bolton, BL1 1ET United Kingdom
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-xl-2">
            <div className="footer-links mb-40">
              {/* <!-- Title --> */}
              <h6 className="h6-lg">Social</h6>
              {/* <!-- <div className="col-md-6"> --> */}

              <Link
                href="https://www.facebook.com/alldayDr.UK/"
                className="font-20 weight-400 text-dark-gray in-block"
              >
                {/* <!-- <span className="bg_facebook margin-right-5"></span> --> */}
                <i
                  className="fa fa-facebook text-dark-gray facebook font-22 fa-lg margin-right-8"
                  aria-hidden="true"
                ></i>
              </Link>
              <Link
                href="https://twitter.com/alldayDr_UK"
                className="font-20 weight-400 text-dark-gray in-block footer-twitt-icon"
              >
                {/* <!-- <span className="bg_twitter"></span> --> */}
                <i
                  className="fa fa-twitter text-dark-gray twitter font-22 fa-lg margin-right-8"
                  aria-hidden="true"
                ></i>
              </Link>
              <Link
                href="https://www.linkedin.com/company/11127258/"
                className="font-20 weight-400 text-dark-gray in-block"
              >
                {/* <!-- <span className="bg_linkedin margin-right-5"></span> --> */}
                <i
                  className="fa fa-linkedin text-dark-gray linkedin font-22 fa-lg margin-right-8"
                  aria-hidden="true"
                ></i>
              </Link>
              <Link
                href="https://www.instagram.com/alldaydr/"
                className="font-20 weight-400 text-dark-gray in-block"
              >
                {/* <!-- <span className="bg_instagram"></span> --> */}
                <i
                  className="fa fa-instagram text-dark-gray insta font-22 fa-lg margin-right-8"
                  aria-hidden="true"
                ></i>
              </Link>

              {/* <!-- </div> --> */}
            </div>
          </div>
        </div>
        {/* <!-- END FOOTER CONTENT --> */}

        {/* <!-- BOTTOM FOOTER --> */}
        <div className="bottom-footer grey-color">
          <div className="row d-flex align-items-center">
            {/* <!-- FOOTER COPYRIGHT --> */}
            <div className="col-md-6">
              <div className="footer-copyright">
                <p>&copy;2022 ADDVantage Technologies. All Rights Reserved</p>
              </div>
            </div>
          </div>
          {/* <!-- End row --> */}
        </div>
        {/* <!-- END BOTTOM FOOTER --> */}
      </div>
      {/* <!-- End container --> */}
      {/* <!-- start scrolltop --> */}
      <button
        id="scrollUp"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      ></button>
    </footer>
  );
};

export default Footer;

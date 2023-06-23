import React from "react";
import { Link as ScrollLink } from "react-scroll";
const MeetTeamBanner = () => {
  return (
    <section id="ADDVantage-brands" className="hero-section">
      {/* <!-- HERO TEXT --> */}
      <div id="ADDVantage-brands-txt" className="bg-scroll division">
        <div className="container white-color">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <div className="ADDVantage-brands-txt">
                {/* <!-- Title --> */}
                <h2 className="h2-xs">Meet the Team</h2>

                {/* <!-- Text --> */}
                <p className="p-xl">
                  Providing digital solutions for all your healthcare needs. We
                  are experts in our field in creating bespoke, secure,
                  intuitive technology solutions in the health space.
                </p>

                {/* <!-- Buttons --> */}
                <div className="ADDVantage-brands-btns">
                  {/* <!-- Button --> */}
                  {/* <Link href="#contacts-4" className="btn btn-md btn-dimgreen tra-white-hover mr-15">Get Started Now</Link> */}

                  {/* <!-- Button --> */}
                  <ScrollLink
                    to="contacts-4"
                    smooth={true}
                    className="btn btn-md btn-primary tra-white-hover"
                  >
                    Contact us
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End row -->	   */}
        </div>
        {/* <!-- End container --> */}

        {/* <!-- SECTION OVERLAY -->	 */}
        <div className="bg-fixed white-overlay-top"></div>
      </div>
      {/* <!-- END HERO TEXT --> */}
    </section>
  );
};

export default MeetTeamBanner;

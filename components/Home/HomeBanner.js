import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const HomeBanner = () => {
  const [bannerdata, setBannerdata] = useState([]);
  useEffect(() => {
    const fetchBannerdata = async () => {
      const res = await fetch("api/homebanner");
      const bannerData = await res.json();
      setBannerdata(bannerData);
    };
    fetchBannerdata();
  }, []);
  return (
    <>
      {/* <!-- HERO TEXT --> */}
      <div id="ADDVantage-brands-txt" className="bg-scroll division">
        <div className="container white-color">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <div className="ADDVantage-brands-txt">
                {/* <!-- Title --> */}
                <h1 className="h2-xs">ADDVantage Technologies</h1>
                {/* <!-- h2 tag replaced with h1 --> */}
                {/* <!-- Text --> */}
                <p>
                  Providing digital solutions for all your healthcare needs. We
                  are experts in our field in creating bespoke, secure,
                  intuitive technology solutions in the health space.
                </p>

                {/* <!-- Buttons --> */}
                <div className="ADDVantage-brands-btns">
                  {/* <!-- Button -->
                    <!-- <Link href="#contacts-4" className="btn btn-md btn-dimgreen tra-white-hover mr-15">Get Started Now</Link> --> */}

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
          {/* <!-- End row --> */}
        </div>
        {/* <!-- End container -->

          <!-- SECTION OVERLAY --> */}
        <div className="bg-fixed white-overlay-top"></div>
      </div>
      {/* <!-- END HERO TEXT --> */}

      {/* <!-- HERO BOXES --> */}
      <div className="container">
        <div id="ADDVantage-brands-boxes">
          <div className="row">
            {bannerdata.map((item) => {
              return (
                <div className="col-md-4 mb-15" key={item.id}>
                  <div
                    className="hbox-1 wow"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="600"
                  >
                    {/* <!-- PNG Icon --> */}
                    <div className="heroimage">
                      <img src={`/images/${item.img}.png`} alt={item.alt} />
                    </div>
                    {/* <!-- Text --> */}
                    <h5 className="h5-xs">{item.title}</h5>
                    <p className="grey-color">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* END HERO BOXES */}
    </>
  );
};

export default HomeBanner;

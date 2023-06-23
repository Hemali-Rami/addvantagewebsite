import Image from "next/image";
import Link from "next/link";
import React from "react";
const brandsecdata = [
  {
    sectiontitle: "HEALTHYA Stations",
    sectionpara: [
      <>
        <b>You’re in Control -</b> Take control of your key vitals Free for Life
      </>,

      <>
        <b>Complete Flexibility -</b> Find your nearest Health Kiosk,
      </>,
      <>
        Fast, Reliable & Convenient way to get the coach help you deserve
      </>,
      <>
        Total flexibility and control of scheduling sessions
      </>,
      <>Intuitive and reliable video platform</>,
    ],
    btnlink: "/contactus",
    secimg: "health_solutions",
  },
];
const HealthyaStations = () => {
  return (
    <div className="container white-color">
      {brandsecdata.map((section, index) => {
        return (
          <div className="row d-flex align-items-center" key={index}>
            {/* <!-- IMAGE BLOCK --> */}
            <div className="col-md-5 col-lg-6 order-md-2">
              <div
                className="brand-alldayDr-img right-column pc-35"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                {/* <img
                  className="img-fluid"
                  src={`/images/${section.secimg}.png`}
                  alt="Healthya Station-content"
                /> */}
                <Image
                  className="img-fluid"
                  src={`/images/${section.secimg}.png`}
                  alt="Healthya Station-content"
                  width={759}
                  height={663}
                />
              </div>
            </div>
            {/* <!-- TEXT BLOCK --> */}
            <div className="col-md-7 col-lg-6 order-md-1">
              <div
                className="txt-block left-column pr-50"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                {/* <!-- Title --> */}
                <h1 className="h3-sm">{section.sectiontitle}</h1>

                {/* <!-- Option List --> */}
                <ul className="option-list primary-list mt-35">
                  {section.sectionpara.map((paragraph, index) => {
                    return (
                      <li className="list-box" key={index}>
                        {/* <!-- Icon --> */}
                        <span>
                          <i className="fa fa-check"></i>
                        </span>

                        {/* <!-- Text --> */}
                        <div className="list-box-txt">
                          <p>{paragraph}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                {/* <!-- End Option List --> */}
                <Link
                  href={section.btnlink}
                  className="btn btn-md btn-primary mr-10"
                  // target={"_blank"}
                >
                  Discover more
                </Link>
              </div>
            </div>
            {/* <!-- END TEXT BLOCK --> */}
          </div>
        );
      })}
    </div>
  );
};

export default HealthyaStations;

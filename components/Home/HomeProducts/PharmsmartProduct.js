// import { Element } from "react-scroll";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const brandsecdata = [
  {
    sectiontitle: "Pharmsmart",
    sectionpara: [
      <>
        Pharmsmart is home to the most innovative electronic CD register yet.
      </>,
      <>
        Pharmsmart is an all-in-one pharmacy app built by pharmacists for
        pharmacists to save time, money, and make life a lot easier.
      </>,
      <>
        The app contains free modules built to help our lovely pharmacy
        community. These include:
        <br />
        - Responsible Pharmacist Log <br />
        - Fridge Log <br />
        - Private Prescription Register
        <br />
        - Date Checking Log
        <br />
        - Cleaning Log
        <br />
        - Staff Clocking In/Out
        <br />
      </>,
    ],
    btnlink: "https://pharmsmart.co.uk",
    secimg: "pharmsmart-product",
  },
];
const PharmsmartProduct = () => {
  return (
    <div className="container white-color">
      {brandsecdata.map((section, index) => {
        return (
          <div className="row d-flex align-items-center" key={index}>
            {/* <!-- IMAGE BLOCK --> */}
            <div className="col-md-6 col-lg-6 order-md-2">
              <div
                className="brand-Pharmsmart-img right-column "
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <Image
                  className="img-fluid"
                  src={`/images/${section.secimg}.svg`}
                  alt="pharmsmart-content"
                  width={794}
                  height={596}
                />
              </div>
            </div>
            {/* <!-- TEXT BLOCK --> */}
            <div className="col-md-6 col-lg-6 order-md-1">
              <div
                className="txt-block left-column pc-35"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                {/* <!-- Title --> */}
                <h1 className="h3-sm">{section.sectiontitle}</h1>

                {/* <!-- Option List --> */}
                <ul className="option-list primary-list mt-35">
                  {/* <!-- List Item #1 --> */}
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
                  className="btn btn-md btn-primary tra-white-hover"
                  rel="noopener noreferrer"
                  target={"_blank"}
                >
                  Discover more
                </Link>
              </div>
            </div>
            {/* <!-- END TEXT BLOCK --> */}
          </div>
        );
      })}

      {/* <!-- End row --> */}
    </div>
  );
};

export default PharmsmartProduct;

// import { Element, scroller } from "react-scroll";
import Link from "next/link";
const brandsecdata = [
  {
    sectiontitle: "alldayDr",
    sectionpara: [
      `alldayDr provides convenient, high quality healthcare through a fast and reliable platform.`,
      `Fast, effective treatment 
        at a time that suits you.`,
    ],
    btnlink: "https://www.alldaydr.com",
    secimg: "alldaydr-product",
  },
];
const AlldayDrProduct = () => {
  return (
    <>
      {/*brand-alldayDr */}

      <div className="container">
        {brandsecdata.map((section, index) => {
          return (
            <div className="row d-flex align-items-center m-row" key={index}>
              {/* <!-- TEXT BLOCK --> */}
              <div className="col-md-7 col-lg-6 m-bottom">
                <div
                  className="txt-block left-column pc-35"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  {/* <!-- Title --> */}
                  <h1 className="h3-sm mb-20">{section.sectiontitle}</h1>

                  {/* <!-- Text List --> */}
                  <ul className="txt-list grey-color">
                    {section.sectionpara.map((paragraph, index) => {
                      return (
                        <li className="list-item" key={index}>
                          <i className="fa fa-genderless"></i>
                          <p className="p-md">{paragraph}</p>
                        </li>
                      );
                    })}
                  </ul>
                  {/* <!-- End Text List --> */}

                  {/* <!-- Tools List --> */}
                  <div className="tools-list mt-30">
                    {/* <!-- Text --> */}
                    <Link
                      href={section.btnlink}
                      className="btn btn-md btn-primary mr-10"
                      rel="noopener noreferrer"
                      target={"_blank"}
                    >
                      Discover more
                    </Link>
                    {/* <Link href="./bookDemo.html" className="btn btn-md btn-dimgreen">
                    Request a demo
                  </Link> */}
                  </div>
                </div>
              </div>
              {/* <!-- END TEXT BLOCK --> */}

              {/* <!-- IMAGE BLOCK --> */}
              <div className="col-md-5 col-lg-6 m-top">
                <div
                  className="brand-alldayDr-img right-column "
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <img
                    className="img-fluid"
                    src={`/images/${section.secimg}.png`}
                    alt="alldatdr-content"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/*END brand-alldayDr*/}
    </>
  );
};

export default AlldayDrProduct;

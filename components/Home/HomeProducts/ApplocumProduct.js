// import { Element } from "react-scroll";
import Link from "next/link";
const brandsecdata = [
  {
    sectiontitle: "AppLocum",
    sectionpara: [
      `AppLocum empowers healthcare professionals and
                      organisations through technology by simplifying the locum
                      staffing process.`,
      ` We approach healthcare recruitment with the combined
                      expertise of seasoned consultants and experienced
                      clinicians to support the healthcare industry’s staffing
                      needs.`,
    ],
    btnlink: "https://www.applocum.com",
    secimg: "applocum-product",
  },
];
const ApplocumProduct = () => {
  return (
    <div className="container">
      {/*TOP CONTENT*/}
      <div id="c3-top" className="cbox-3">
        {brandsecdata.map((section, index) => {
          return (
            <div className="row d-flex align-items-center m-row" key={index}>
              {/*TEXT BLOCK*/}
              <div className="col-md-5 col-lg-6 m-bottom">
                <div
                  className="txt-block left-column"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  {/*Title*/}
                  <h1 className="h3-sm mb-20">{section.sectiontitle}</h1>

                  {/*Text List*/}
                  <ul className="txt-list grey-color">
                    {section.sectionpara.map((paragraph, index) => {
                      return (
                        <li className="list-item" key={index}>
                          <i className="fa fa-genderless"></i>
                          <p>{paragraph}</p>
                        </li>
                      );
                    })}
                  </ul>
                  {/*End Text List*/}

                  {/* website*/}
                  <Link
                    href={section.btnlink}
                    className="btn btn-md btn-primary mr-10"
                    rel="noopener noreferrer"
                    target={"_blank"}
                  >
                    Discover more
                  </Link>
                  {/* <Link
                    href="./bookDemo.html"
                    id="applocum-demo"
                    className="btn btn-md btn-dimgreen"
                  >
                    Request a demo
                  </Link> */}
                </div>
              </div>
              {/*END TEXT BLOCK*/}

              {/*IMAGE BLOCK*/}
              <div className="col-md-7 col-lg-6 m-top">
                <div
                  className="img-block right-column brand-applocum-img"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <img
                    className="img-fluid"
                    src={`/images/${section.secimg}.png`}
                    alt="applocum-content"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApplocumProduct;

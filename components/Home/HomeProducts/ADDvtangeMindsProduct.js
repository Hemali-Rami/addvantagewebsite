import Link from "next/link";
import Image from "next/image";
const brandsecdata = [
  {
    sectiontitle: "ADDVantage MINDS",
    sectionpara: [
      `To cater for digital poverty, there is no need to download any apps. A quick and easy method to consult immediately by sending secure invites for therapy consultation sessions via SMS or Email.`,
      `With various customisation options such as path control (vertical, horizontal, diagonal), elements of size, shape, colour, speed and more.`,
      `Adapt and vary sound effects and bilateral stimuli sounds. Immediate plug and play with no need for special headphones or earbuds.`,
      `Standalone platform with no need for integrations, allowing for quick adoption and utilisation next to existing legacy systems by Mental Health Organisations and Therapists`,
      `Standalone platform with no need for integrations, allowing for quick adoption and utilisation next to existing legacy systems by Mental Health Organisations and Therapists`,
      `Simple and easy-to-use solution with zero dependencies on app downloads nor complex sign-up processes, enabling a wider patient reach and utilisation.`,
    ],
    btnlink: "https://minds.addvantage-technologies.co.uk/",
    secimg: "addminds-product",
  },
];
const ADDvtangeMindsProduct = () => {
  return (
    <div className="container">
      {/*TOP CONTENT*/}
      <div id="c3-top" className="cbox-3">
        {brandsecdata.map((section, index) => {
          return (
            <div className="row d-flex align-items-center m-row" key={index}>
              {/*IMAGE BLOCK*/}
              <div className="col-md-6 col-lg-6 m-top">
                <div
                  className="img-block right-column brand-addminds-img"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  {/* <img
                    className="img-fluid"
                    src={`/images/${section.secimg}.png`}
                    alt="applocum-content"
                  /> */}
                  <Image
                    className="img-fluid width_auto"
                    src={`/images/${section.secimg}.png`}
                    alt="applocum-content"
                    width={794}
                    height={596}
                  />
                </div>
              </div>
              {/*TEXT BLOCK*/}
              <div className="col-md-6 col-lg-6 m-bottom">
                <div
                  className="txt-block left-column"
                  data-aos="fade-left"
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
                  <Link
                    href={section.btnlink}
                    className="btn btn-md btn-primary mr-10"
                    rel="noopener noreferrer"
                    target={"_blank"}
                  >
                    Discover more
                  </Link>
                </div>
              </div>
              {/*END TEXT BLOCK*/}
            </div>
          );
        })}

        {/*End row */}
      </div>
      {/* END TOP CONTENT*/}
    </div>
  );
};

export default ADDvtangeMindsProduct;

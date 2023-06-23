// import { Element } from "react-scroll";
import Link from "next/link";
const brandsecdata = [
  {
    sectiontitle: "healthya",
    sectionpara: [
      `At healthya we are all about supporting our healthcare
                      partners : increasing quality of life, saving time and
                      maximising productivity.`,
      ` With joint collaboration and cutting-edge technology, you
                      gain the ability to deliver effortless, tailored and
                      personalised digital services at the touch of a button.`,
      `  The platform for your responsive and cost-effective care
                      model.`,
      `Our intuitive digital app empowers professionals to remotely support patients and better self-manage their needs.`,
    ],
    btnlink: "/contactus",
    secimg: "healthya-product",
  },
];
const HealthyaProduct = () => {
  return (
    <div className="container white-color">
      {brandsecdata.map((section, index) => {
        return (
          <div className="row d-flex align-items-center" key={index}>
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div
                className="brand-healthya-img left-column"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <img
                  className="img-fluid"
                  src={`/images/${section.secimg}.png`}
                  alt="healthya-content"
                />
              </div>
            </div>

            {/*TEXT BLOCK*/}
            <div className="col-md-7 col-lg-6">
              <div
                className="txt-block right-column pc-35"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                {/*Title*/}
                <h1 className="h3-sm">{section.sectiontitle}</h1>

                {/*Option List*/}
                <ul className="option-list primary-list mt-35">
                  {section.sectionpara.map((paragraph, index) => {
                    return (
                      <li className="list-box" key={index}>
                        {/* Icon*/}
                        <span>
                          <i className="fa fa-check"></i>
                        </span>
                        {/* Text*/}
                        <div className="list-box-txt">
                          <p>{paragraph}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                {/*End Option List*/}

                <Link
                  href={section.btnlink}
                  className="btn btn-md btn-primary tra-white-hover mr-10"
                  rel="noopener noreferrer"
                  // target={"_blank"}
                >
                  Discover more
                </Link>
                {/* Link
                  href="./bookDemo.html"
                  id="healthya-demo"
                  className="btn btn-md btn-dimgreen"
                >
                  Request a demo
                </Link> */}
              </div>
            </div>
            {/*END TEXT BLOCK */}
          </div>
        );
      })}

      {/*End row*/}
    </div>
  );
};

export default HealthyaProduct;

import React from "react";
import Link from "next/link";

const CTASection = () => {
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
  return (
    <section id="cta-1" className="cta-1 bg-01 cta-section division">
      <div className="container white-color">
        <div className="row d-flex align-items-center">
          {/* <!-- CALL TO ACTION TEXT --> */}
          <div className="col-lg-7">
            <div className="cta-1-txt pr-25">
              {/* <!-- Title --> */}
              <h4 className="h4-sm">Let's make something great together</h4>

              {/* <!-- Text --> */}
              <p className="p-md"></p>
            </div>
          </div>

          {/* <!-- CALL TO ACTION BUTTON --> */}
          <div className="col-lg-5">
            <div className="cta-1-btn text-right">
              {/* <!-- Button --> */}
              {/* <Link href="./index.html#brand-alldayDr" className="btn btn-md btn-primary tra-white-hover">Explore
								our products</Link> */}
              <Link
                href="/"
                className="btn btn-md btn-primary tra-white-hover"
                onClick={() => handleMenuItemClick("brandAlldayDrRef")}
              >
                Explore our products
              </Link>
              {/* <!-- Small Text --> */}
              <p className="p-sm mt-15"></p>
            </div>
          </div>
        </div>
        {/* <!-- End row --> */}
      </div>
      {/* <!-- End container --> */}
    </section>
  );
};

export default CTASection;

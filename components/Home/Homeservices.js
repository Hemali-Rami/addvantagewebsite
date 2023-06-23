import React from 'react'

const Homeservices = () => {
  return (
    <>
        <div className="container">
          {/* <!-- SECTION TITLE --> */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="section-title mb-50">
                {/* <!-- Text --> */}
                <p className="p-lg">
                  ADDVantage Technologies ensures consistency and excellence
                  across all our brands. We aim to deliver innovative solutions
                  that result in cost-saving, efficient results. Our standards
                  are high, so that our solutions are robust.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- SERVICES-9 WRAPPER --> */}
          <div className="sbox-9-wrapper pc-05">
            <div className="row">
              {/* <!-- SERVICE BOX #1 --> */}
              <div className="col-md-3 ml-auto">
                <div
                  className="sbox-8"
                  data-aos-duration="2000"
                  data-aos-delay="600"
                  data-aos="fade-up"
                >
                  <ul className="txt-list">
                    <li className="list-item">
                      <i className="fa fa-check primary-color"></i>
                      <p className="p-md grey-color">Innovative</p>
                    </li>

                    <li className="list-item">
                      <i className="fa fa-check primary-color"></i>
                      <p className="p-md grey-color">Secure</p>
                    </li>

                    <li className="list-item">
                      <i className="fa fa-check primary-color"></i>
                      <p className="p-md grey-color">Compliant</p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- END SERVICE BOX #1 --> */}

              {/* <!-- SERVICE BOX #2 --> */}
              <div className="col-md-3 mr-auto">
                <div
                  className="sbox-8 "
                  data-aos-duration="2000"
                  data-aos-delay="600"
                  data-aos="fade-up"
                >
                  <ul className="txt-list">
                    <li className="list-item">
                      <i className="fa fa-check primary-color"></i>
                      <p className="p-md grey-color">High Value</p>
                    </li>

                    <li className="list-item">
                      <i className="fa fa-check primary-color"></i>
                      <p className="p-md grey-color">Consistent</p>
                    </li>

                    <li className="list-item">
                      <i className="fa fa-check primary-color"></i>
                      <p className="p-md grey-color">Efficient</p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- END SERVICE BOX #2 --> */}
            </div>
            {/* <!-- End row --> */}
          </div>
        </div>
        
    </>
  );
}

export default Homeservices

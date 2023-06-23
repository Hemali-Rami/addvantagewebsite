import React from "react";
import { Input, DatePicker, Select } from "antd";
const { TextArea } = Input;
//datepicker
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

//for select
const handleproductChange = (value) => {
  console.log(`selected ${value}`);
};
const BookDemoForm = () => {
  return (
    <section
      id="contacts-1"
      className="contacts-1 wide-80 contacts-section division"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="row">
              {/* <!-- CONTACTS INFO --> */}
              <div className="col-md-4">
                {/* <!-- LOCATION --> */}
                <div className="contact-1-box mt-10">
                  <h5 className="h5-xs">Our products</h5>
                </div>

                {/* <!-- PHONES --> */}
                <div className="contact-1-box">
                  <img
                    src="/images/alldaydr-logo.png"
                    height="50"
                    alt="footer-logo"
                  />
                </div>

                {/* <!-- WORKING HOURS --> */}
                <div className="contact-1-box">
                  <img
                    src="/images/healthya-logo.png"
                    height="50"
                    alt="footer-logo"
                  />
                </div>
                <div className="contact-1-box">
                  <img
                    src="/images/applocum-logo.png"
                    height="50"
                    alt="footer-logo"
                  />
                </div>
                <div className="contact-1-box">
                  <img
                    src="/images/addvantage.png"
                    height="50"
                    alt="footer-logo"
                  />
                </div>
                <div className="contact-1-box">
                  <img
                    src="/images/coach2health.png"
                    height="50"
                    alt="footer-logo"
                  />
                </div>
                <div className="contact-1-box">
                  <img
                    src="/images/pharmsmart.png"
                    height="50"
                    alt="footer-logo"
                  />
                </div>
              </div>
              {/* <!-- END CONTACTS INFO --> */}

              {/* <!-- CONTACT FORM --> */}
              <div className="col-md-8">
                <div className="form-wrapper">
                  <form
                    name="contactform"
                    id="request-form"
                    className="row  contact-form"
                  >
                    {/* <!-- Form Input --> */}
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Your name*</label>
                        <Input
                          placeholder="Name..."
                          className="form-control name"
                        />
                      </div>
                    </div>

                    {/* <!-- Form Input --> */}
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Email*</label>
                        <Input
                          placeholder="Email..."
                          className="form-control email"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Phone*</label>
                        <Input
                          placeholder="Phone..."
                          className="form-control phone"
                          type="number"
                        />
                      </div>
                    </div>

                    {/* <!-- Form Input --> */}
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Organisation*</label>

                        <Input
                          placeholder="Organisation..."
                          className="form-control organisation"
                        />
                      </div>
                    </div>

                    {/* <!-- Form Input --> */}
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Job title*</label>
                        <Input
                          placeholder="Job Title..."
                          className="form-control jobTitle"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Book date*</label>
                        <DatePicker onChange={onChange} />
                      </div>
                    </div>

                    {/* <!-- Form Select --> */}
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Select a product*</label>
                        <Select
                          defaultValue="Select a product"
                          onChange={handleproductChange}
                          options={[
                            { value: "alldayDr", label: "alldayDr" },
                            { value: "Healthya", label: "Healthya" },
                            { value: "Applocum", label: "Applocum" },
                            {
                              value: "ADDVantage Minds",
                              label: "ADDVantage Minds",
                            },
                            { value: "Coach2Health", label: "Coach2Health" },
                            { value: "Pharmsmart", label: "Pharmsmart" },
                          ]}
                        />
                      </div>
                    </div>
                    {/* <!-- Form Textarea --> */}
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Additional information</label>
                        <TextArea
                          name="message"
                          className="form-control message"
                          rows="2"
                          placeholder="Additional information ..."
                        />
                      </div>
                    </div>

                    {/* <!-- Form Button --> */}
                    <div className="col-md-12 mt-5 text-right">
                      <button
                        type="submit"
                        className="btn btn-md btn-primary tra-primary-hover submit"
                      >
                        Request
                      </button>
                    </div>

                    {/* <!-- Form Message --> */}
                    <div className="col-md-12 contact-form-msg text-center">
                      <div className="sending-msg">
                        <span className="loading"></span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* <!-- END CONTACT FORM --> */}
            </div>
          </div>
        </div>
        {/* <!-- End row --> */}
      </div>
      {/* <!-- End container --> */}
    </section>
  );
};

export default BookDemoForm;

import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { Formik } from "formik";
import { ValidateInquiryContactForm } from "./ValidateContactForm";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  errorToast,
  getErrorObject,
  successToast,
} from "../../utilities/utils";
import { submitInquiryAPI } from "../../Services/businessPartners";

const ContactForm = () => {
  const [initialValues, setInitialValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    phone: "",
    job_title: "",
    hear_about_us: "",
    pharmacy_name: "",
    number_of_branches: "",
  });

  const handleSubmit = async (values, setSubmitting, resetForm) => {
    // await setInitialValues();

    try {
      let payload = {
        first_name: values?.first_name?.toString(),
        last_name: values?.last_name?.toString(),
        email: values?.email?.toString(),
        job_title: values?.job_title?.toString(),
        hear_about_us: values?.hear_about_us?.toString(),
        message: values?.message?.toString(),
        phone: `${values?.phone?.toString()}`,
        pharmacy_name: values?.pharmacy_name?.toString(),
        number_of_branches: values?.number_of_branches?.toString(),
      };
      console.log("api Payload:", payload);
      let response = await submitInquiryAPI(payload);
      console.log("Response roles", response);
      if (response.data.success) {
        successToast({
          content: response.data.message,
        });
        setInitialValues({
          first_name: "",
          last_name: "",
          email: "",
          message: "",
          phone: "",
          job_title: "",
          hear_about_us: "",
          pharmacy_name: "",
          number_of_branches: "",
        });
        resetForm({
          values: { ...initialValues, products: [] },
          errors: {},
        });
        await setSubmitting(false);
      }
      // await setSubmitting(false);
    } catch (e) {
      const { message } = getErrorObject(e);
      errorToast({
        content: message,
      });
      await setSubmitting(false);
    }
  };
  return (
    <section
      id="contacts-3"
      className="contacts-3 wide-60 contact-section division"
    >
      <div className="container">
        <div
          className="android-section"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="600"
        >
          <div className="android-wrapper left">
            <img
              src="/images/android-screen-3.png"
              className="android-screen"
              alt="screen"
            />
            <img
              src="/images/android-frame.png"
              className="android-frame"
              alt="frame"
            />
          </div>
          <div className="android-wrapper center">
            <img
              src="/images/android-screen-1.png"
              className="android-screen"
              alt="screen"
            />
            <img
              src="/images/android-frame.png"
              className="android-frame"
              alt="frame"
            />
          </div>
          <div className="android-wrapper right">
            <img
              src="/images/android-screen-2.png"
              className="android-screen"
              alt="screen"
            />
            <img
              src="/images/android-frame.png"
              className="android-frame"
              alt="frame"
            />
          </div>
        </div>
        <img
          src="/images/health-machine-full.png"
          className="full-health-machine-img"
          alt=""
        />
        <div className="contact-form-wrapper">
          {/* <!-- Title --> */}
          <h2 className="h2-xs m-auto">Get in touch with us!</h2>
          {/* <!-- Text --> */}
          <p className="p-xl m-auto">
            Feel free to ask. We're always happy to help out.
          </p>
          <div className="contact-form">
            <Formik
              initialValues={initialValues}
              validate={ValidateInquiryContactForm}
              resetForm={{
                values: initialValues,
                errors: null,
                isSubmitting: false,
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log("values--->", values);
                handleSubmit(values, setSubmitting, resetForm);
              }}
            >
              {({
                values,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="first_name"
                            value={values?.first_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="firstname"
                            placeholder="Enter your first name"
                          />
                          {errors && (
                            <span
                              id="val-username1-error"
                              className="invalid-feedback animated fadeInUp"
                              style={{ display: "block" }}
                            >
                              {errors.first_name}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            name="last_name"
                            value={values?.last_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter your last name"
                          />
                          {errors && (
                            <span
                              id="val-username1-error"
                              className="invalid-feedback animated fadeInUp"
                              style={{ display: "block" }}
                            >
                              {errors.last_name}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={values?.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter email address"
                          />
                          {errors && (
                            <span
                              id="val-username1-error"
                              className="invalid-feedback animated fadeInUp"
                              style={{ display: "block" }}
                            >
                              {errors.email}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group phone-number-input">
                          <label>Phone Number</label>
                          <PhoneInput
                            country={"gb"}
                            inputClass="form-contorl"
                            countryCodeEditable={true}
                            onChange={(d) => {
                              console.log("phone", d);
                              setFieldValue("phone", `+${d}`);
                            }}
                            placeholder="+1 (324) 242-3423"
                            specialLabel=""
                            value={values?.phone}
                          />
                          {errors && (
                            <span
                              id="val-username1-error"
                              className="invalid-feedback animated fadeInUp"
                              style={{ display: "block" }}
                            >
                              {errors.phone}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Pharmacy Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="pharmacy_name"
                            id="pharmacyname"
                            placeholder="Enter pharmacy name"
                            value={values?.pharmacy_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors && (
                            <span
                              id="val-username1-error"
                              className="invalid-feedback animated fadeInUp"
                              style={{ display: "block" }}
                            >
                              {errors.pharmacy_name}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Number of Branches</label>
                          <input
                            type="text"
                            className="form-control"
                            name="number_of_branches"
                            id="numberofbranches"
                            placeholder="Enter number of branches"
                            value={values?.number_of_branches}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors && (
                            <span
                              id="val-username1-error"
                              className="invalid-feedback animated fadeInUp"
                              style={{ display: "block" }}
                            >
                              {errors.number_of_branches}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>Job Title</label>

                          <input
                            type="text"
                            className="form-control"
                            name="job_title"
                            id="numberofbranches"
                            placeholder="Enter Job Title"
                            value={values?.job_title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors && (
                            <span
                              id="val-username1-error"
                              className="invalid-feedback animated fadeInUp"
                              style={{ display: "block" }}
                            >
                              {errors.job_title}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label>Where did you hear about us?</label>

                          <Select
                            placeholder="Select where did you hear about us"
                            // value={value}
                            value={values?.hear_about_us}
                            onChange={(e) => setFieldValue("hear_about_us", e)}
                            options={[
                              {
                                value: "Pharmsmart",
                                label: "Pharmsmart",
                              },
                              { value: "LinkedIn", label: "LinkedIn" },
                              { value: "Events/expo", label: "Events/expo" },
                              { value: "Website", label: "Website" },
                              { value: "Other", label: "Other" },
                            ]}
                          />
                          {errors && (
                            <span
                              id="val-username1-error"
                              className="invalid-feedback animated fadeInUp"
                              style={{ display: "block" }}
                            >
                              {errors.hear_about_us}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="contact-form-footer">
                        <button type="submit" className="submit-btn">
                          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                        </button>
                      </div>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
      {/* <!-- End container --> */}
    </section>
  );
};

export default ContactForm;

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ValidationMeetContact } from "./ValidationMeetContact";
import { Formik } from "formik";
import React, { useState } from "react";
import {
  errorToast,
  getErrorObject,
  successToast,
} from "../../utilities/utils";
import { addSubmitRequestFromADDV } from "../../Services/businessPartners";
import { Checkbox } from "antd";

const Meettheform = () => {
  const [initialValues, setInitialValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    products: [],
    message: "",
    phone: "+44",
    position: "",
    organization_name: "",
    errors: {},
  });
  // const handleCheckBox = (e, p, setFieldValue) => {
  //   if (e.target.checked) {
  //     setInitialValues({
  //       ...initialValues,
  //       products: [...initialValues.products, p],
  //     });
  //     setFieldValue("products", [...initialValues.products, p]);
  //   } else {
  //     setInitialValues({
  //       ...initialValues,
  //       products: initialValues.products.filter((x) => x !== p),
  //     });
  //     setFieldValue(
  //       "products",
  //       initialValues.products.filter((x) => x !== p)
  //     );
  //   }
  // };
  // const handleSubmit = (values, { setSubmitting }) => {
  //   // Handle form submission here
  //   console.log(values);
  //   setSubmitting(false); // Stop the submitting state
  // };
  const handleCheckBox = (checked, p, setFieldValue) => {
    if (checked) {
      setInitialValues({
        ...initialValues,
        products: [...initialValues.products, p],
      });
      setFieldValue("products", [...initialValues.products, p]);
    } else {
      setInitialValues({
        ...initialValues,
        products: initialValues.products.filter((x) => x !== p),
      });
      setFieldValue(
        "products",
        initialValues.products.filter((x) => x !== p)
      );
    }
  };

  const handleSubmit = async (values, setSubmitting, resetForm) => {
    // await setInitialValues();

    try {
      let payload = {
        first_name: values?.first_name,
        last_name: values?.last_name,
        email: values?.email,
        products: values?.products,
        message: values?.message,
        phone: `${values?.phone}`,
        business_type: "addvantage_website",
        position: values?.position,
        organization_name: values?.organization_name,
      };

      let response = await addSubmitRequestFromADDV(payload);
      console.log("Response roles", response);
      if (response.data.success) {
        setInitialValues({
          first_name: "",
          last_name: "",
          email: "",
          products: [],
          message: "",
          phone: "+44",
          position: "",
          organization_name: "",
        });
        successToast({
          content: response.data.message,
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
    <div className="container white-color">
      {/* <!-- SECTION TITLE --> */}
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="section-title mb-30 text-center">
            {/* <!-- Title 	--> */}
            <h1 className="h3-md">Have a question?</h1>

            {/* <!-- Text --> */}
            <p className="p-lg">
              Feel free to ask. We're always happy to help out.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          <div className="row">
            {/* <!-- CONTACT FORM --> */}
            <div className="col-md-12">
              <div className="form-wrapper">
                <Formik
                  initialValues={{
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone: "",
                    position: "",
                    organization_name: "",
                    message: "",
                    products: [],
                  }}
                  validate={ValidationMeetContact}
                  enableReinitialize={false}
                  // onSubmit={handleSubmit}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log("values--->", values);
                    handleSubmit(values, setSubmitting, resetForm);
                  }}
                >
                  {({
                    values,
                    handleSubmit,
                    isSubmitting,
                    errors,
                    setFieldValue,
                    handleBlur,
                    handleChange,
                  }) => (
                    <form
                      name="contactform"
                      className="row contact-form"
                      onSubmit={handleSubmit}
                    >
                      {/* <!-- Form Input --> */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>First name*</label>
                          <input
                            type="text"
                            name="first_name"
                            className="form-control firstName"
                            placeholder="First name..."
                            onBlur={handleBlur}
                            onChange={handleChange}
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

                      {/* <!-- Form Input --> */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Surname*</label>
                          <input
                            type="text"
                            name="last_name"
                            className={`form-control surName ${
                              errors?.last_name && "input-error"
                            }`}
                            placeholder="Surname..."
                            onBlur={handleBlur}
                            onChange={handleChange}
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

                      {/* <!-- Form Input --> */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Email*</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control email"
                            placeholder="Email Address..."
                            onBlur={handleBlur}
                            onChange={handleChange}
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

                      {/* <!-- Form Input --> */}
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Phone number*</label>
                          <PhoneInput
                            country={"gb"}
                            // onlyCountries={["us"]}
                            // preferredCountries={[""]}
                            inputClass="form-contorl"
                            countryCodeEditable={true}
                            onChange={(d) => {
                              console.log("phone", d);
                              setFieldValue("phone", `+${d}`);
                            }}
                            placeholder="+1 (324) 242-3423"
                            // onFocus={() =>
                            //   setState({ ...state, isCountryEditable: false })
                            // }
                            specialLabel=""
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

                      <div className="col-lg-12">
                        <label className="select-products">
                          Select our products*
                        </label>
                      </div>

                      <div className="col-lg-3">
                        <div className="form-check">
                          {/* <input
                            className="form-check-input alldayDr"
                            type="checkbox"
                            id="flexCheckDefault"
                            checked={values?.products.includes("alldayDr")}
                            onChange={(e) => {
                              handleCheckBox(e, "alldayDr", setFieldValue);
                            }}
                          /> */}
                          {/* <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            
                            <img
                              src="/images/alldaydr-logo.svg"
                              height="22"
                              alt="footer-logo"
                            />
                          </label> */}
                          <Checkbox
                            className="form-check-input alldayDr"
                            checked={values?.products.includes("alldayDr")}
                            onChange={(e) => {
                              handleCheckBox(
                                e.target.checked,
                                "alldayDr",
                                setFieldValue
                              );
                            }}
                          >
                            <img
                              src="/images/alldaydr-logo.svg"
                              height="22"
                              alt="footer-logo"
                            />
                          </Checkbox>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-check">
                          {/* <input
                            className="form-check-input healthya"
                            type="checkbox"
                            id="flexCheckDefault1"
                            checked={values?.products.includes("healthya")}
                            onChange={(e) => {
                              handleCheckBox(e, "healthya", setFieldValue);
                            }}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault1"
                          >
                            
                            <img
                              src="/images/healthya-logo.svg"
                              height="28"
                              alt="footer-logo"
                            />
                          </label> */}
                          <Checkbox
                            className="form-check-input healthya"
                            checked={values?.products.includes("healthya")}
                            onChange={(e) => {
                              handleCheckBox(
                                e.target.checked,
                                "healthya",
                                setFieldValue
                              );
                            }}
                          >
                            {/* healthya */}
                            <img
                              src="/images/healthya-logo.svg"
                              height="28"
                              alt="footer-logo"
                            />
                          </Checkbox>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div className="form-check">
                          {/* <input
                            className="form-check-input applocum"
                            type="checkbox"
                            id="flexCheckDefault2"
                            checked={values?.products.includes("applocum")}
                            onChange={(e) => {
                              handleCheckBox(e, "applocum", setFieldValue);
                            }}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault2"
                          >
                            
                            <img
                              src="/images/applocum-logo.svg"
                              height="22"
                              alt="footer-logo"
                            />
                          </label> */}
                          <Checkbox
                            className="form-check-input applocum"
                            checked={values?.products.includes("applocum")}
                            onChange={(e) => {
                              handleCheckBox(
                                e.target.checked,
                                "applocum",
                                setFieldValue
                              );
                            }}
                          >
                            {/* Applocum */}
                            <img
                              src="/images/applocum-logo.svg"
                              height="22"
                              alt="footer-logo"
                            />
                          </Checkbox>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div className="form-check">
                          {/* <input
                            className="form-check-input applocum"
                            type="checkbox"
                            id="flexCheckDefault3"
                            checked={values?.products.includes("pharmaSmart")}
                            onChange={(e) => {
                              handleCheckBox(e, "pharmaSmart", setFieldValue);
                            }}
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault3"
                          >
                           
                            <img
                              src="/images/pharmasmart-logo.svg"
                              height="22"
                              alt="footer-logo"
                            />
                          </label> */}
                          <Checkbox
                            className="form-check-input applocum"
                            checked={values?.products.includes("pharmaSmart")}
                            onChange={(e) => {
                              handleCheckBox(
                                e.target.checked,
                                "pharmaSmart",
                                setFieldValue
                              );
                            }}
                          >
                            {/* Applocum */}
                            <img
                              src="/images/pharmasmart-logo.svg"
                              height="22"
                              alt="footer-logo"
                            />
                          </Checkbox>
                        </div>
                      </div>
                      <div className="col-12">
                        {errors && (
                          <span
                            id="val-username1-error"
                            className="invalid-feedback animated fadeInUp"
                            style={{ display: "block" }}
                          >
                            {errors.products}
                          </span>
                        )}
                      </div>
                      <div className="col-lg-6 mt-3">
                        <div className="form-group">
                          <label>Position*</label>
                          <input
                            type="text"
                            name="position"
                            className="form-control email"
                            placeholder="Enter Position..."
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          {errors && (
                            <span
                              id="val-username1-error"
                              className="invalid-feedback animated fadeInUp"
                              style={{ display: "block" }}
                            >
                              {errors.position}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <div className="form-group">
                          <label>Organization*</label>
                          <input
                            type="text"
                            name="organization_name"
                            className="form-control email"
                            placeholder="Enter organization ..."
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          {errors && (
                            <span
                              id="val-username1-error"
                              className="invalid-feedback animated fadeInUp"
                              style={{ display: "block" }}
                            >
                              {errors.organization_name}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* <!-- Form Textarea --> */}
                      <div className="col-md-12 mt-3">
                        <div className="form-group">
                          <label>Query description</label>
                          <textarea
                            name="message"
                            className="form-control query"
                            rows="6"
                            placeholder="Your Message ..."
                            onBlur={handleBlur}
                            onChange={handleChange}
                          ></textarea>
                          {errors && (
                            <span
                              id="val-username1-error"
                              className="invalid-feedback animated fadeInUp"
                              style={{ display: "block" }}
                            >
                              {errors.message}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* <!-- Form Button --> */}
                      <div className="col-md-12 mt-5 text-left">
                        <button
                          type="submit"
                          className="btn btn-md btn-primary tra-primary-hover submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Send Message"}
                        </button>
                      </div>

                      {/* <!-- Form Message --> */}
                      <div className="col-md-12 contact-form-msg text-center">
                        <div className="sending-msg">
                          <span className="loading"></span>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
            {/* <!-- END CONTACT FORM --> */}
          </div>
        </div>
      </div>
      {/* <!-- End row --> */}
    </div>
  );
};

export default Meettheform;

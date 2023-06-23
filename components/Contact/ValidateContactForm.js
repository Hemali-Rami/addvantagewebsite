import validator from "validator";

export function ValidateInquiryContactForm(data) {
  let errors = {};
  console.log("Data", data);
  if (data.first_name !== undefined && validator.isEmpty(data.first_name)) {
    errors.first_name = "First name  is required";
  }

  if (data.last_name !== undefined && validator.isEmpty(data.last_name)) {
    errors.last_name = "Last name  is required";
  }

  if (data.email !== undefined && validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  if (data.email !== undefined && validator.isEmpty(data.email) === false) {
    if (!validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
    }
  }

  if (data.phone !== undefined && validator.isEmpty(data.phone?.toString())) {
    errors.phone = "Phone is required";
  }
  if (
    data.phone !== undefined &&
    validator.isEmpty(data.phone?.toString()) === false
  ) {
    console.log("Phone", data.phone.toString().length);
    if (data.phone.toString().length < 13) {
      errors.phone = "Phone no should be of 13 digit";
    }
  }
  if (
    data.hear_about_us !== undefined &&
    validator.isEmpty(data.hear_about_us)
  ) {
    errors.hear_about_us = "Please select where did you hear about us";
  }

  if (data.job_title !== undefined && validator.isEmpty(data.job_title)) {
    errors.job_title = "Please select job title";
  }
  if (
    data.number_of_branches !== undefined &&
    validator.isEmpty(data.number_of_branches)
  ) {
    errors.number_of_branches = "Please enter number of branches";
  }

  if (
    data.pharmacy_name !== undefined &&
    validator.isEmpty(data.pharmacy_name)
  ) {
    errors.pharmacy_name = "Please enter pharmacy name";
  }

  return errors;
}

import validator from "validator";

export function ValidationMeetContact(data) {
  let errors = {};
  console.log("Data", data);
  if (data.first_name !== undefined && validator.isEmpty(data.first_name)) {
    errors.first_name = "First name  is required";
  }

  if (data.last_name !== undefined && validator.isEmpty(data.last_name)) {
    errors.last_name = "Last name  is required";
  }

  if (data.position !== undefined && validator.isEmpty(data.position)) {
    errors.position = "Position  is required";
  }

  if (
    data.organization_name !== undefined &&
    validator.isEmpty(data.organization_name)
  ) {
    errors.organization_name = "Organization name  is required";
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
  if (data.message !== undefined && validator.isEmpty(data.message)) {
    errors.message = "Message is required";
  }
  if (data.products && data.products.length === 0) {
    errors.products = "Please  select products";
  }

  return errors;
}

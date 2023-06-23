import { get, post } from "./ServiceIndex";

export const fetchBusinessPartners = async (params) => {
  const request = {
    subUrl: `/business_partners.json`,
    params,
  };
  const response = await get(request);
  return response;
};

export const addSubmitRequestFromADDV = async (data) => {
  const request = {
    subUrl: `/business_partners.json`,
    data,
  };
  const response = await post(request);
  return response;
};

export const submitInquiryAPI = async (data) => {
  const request = {
    subUrl: `/pharmacy_partners.json`,
    data,
  };
  // const response = await post(request);
  return post(request);
};

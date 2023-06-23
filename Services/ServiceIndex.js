//@flow
import axios from "axios";
import { loadState } from "../components/common/localStorage";

export const authTokenKey = "AUTH_TOKEN";
// const dstore = store.dis
export const responseHeaderKeys = {
  pagination: "x-pagination",
};

export const apiBaseUrls = {
  prod: "https://api.alldaydr.com/api",
  dev: "https://dev-api.alldaydr.com/api",
  // dev: "https://alldaydr.hereokuapp.com/api",
  // stage: 'http://alb-main-alldaydr-dev-248981017.eu-west-2.elb.amazonaws.com/api',
  stage: "https://staging-api.alldaydr.com/api",
};
export const apiBaseUrlsWithoutApiNameSpace = {
  prod: "https://api.alldaydr.com",
  dev: "https://dev-api.alldaydr.com",
  // dev: "https://alldaydr.hereokuapp.com/api",
  // stage: 'http://alb-main-alldaydr-dev-248981017.eu-west-2.elb.amazonaws.com/api',
  stage: "https://staging-api.alldaydr.com",
};

const webSocketURL = {
  prod: "wss://api.alldaydr.com",
  dev: "wss://dev-api.alldaydr.com",
  // stage: 'wss://alb-main-alldaydr-dev-248981017.eu-west-2.elb.amazonaws.com',
  stage: "wss://staging-api.alldaydr.com",
};

export const appConfig = {
  mockEnv: false,
};

export const react_app_env = {
  prod: "prod",
  dev: "dev",
  stage: "stage",
};

let baseUrl = apiBaseUrls.dev;
let baseWebSocketURL = webSocketURL.dev;
if (process.env.REACT_APP_ENV === react_app_env.stage) {
  baseUrl = apiBaseUrls.stage;
  baseWebSocketURL = webSocketURL.stage;
} else if (process.env.REACT_APP_ENV === react_app_env.prod) {
  baseUrl = apiBaseUrls.prod;
  baseWebSocketURL = webSocketURL.prod;
}
const Irequest = {
  subUrl: "",
  method: "",
  data: {},
  params: {},
  headers: {},
};

export const get = (request) => {
  return commonFetch({ method: "get", ...request });
};

export const post = (request) => {
  return commonFetch({ method: "post", ...request });
};

export const patch = (request) => {
  return commonFetch({ method: "patch", ...request });
};

export const put = (request) => {
  return commonFetch({ method: "put", ...request });
};

export const deletee = (request) => {
  return commonFetch({ method: "delete", ...request });
};

export const abortSignal = axios.CancelToken.source();

const commonFetch = (request) => {
  const {
    subUrl,
    method,
    data = {},
    params = {},
    headers = {},
    isOnlyURL,
  } = request;
  let url = getFullUrl(subUrl);
  let passedHeaders = headers;
  let commonHeaders = getCommonHeaders();

  if (isOnlyURL) {
    url = subUrl;
    passedHeaders = {};
    commonHeaders = {};
  }

  // if (subUrl === "/appointments.json") {
  //   commonHeaders = getCommonHeaders(true);
  // }

  // var arrStr = encodeURIComponent(JSON.stringify(params))

  return axios({
    method,
    url,
    data,
    // cancelToken: abortSignal.token,
    headers: { ...commonHeaders, ...passedHeaders },
    params,
  }).then((response) => {
    if (isOnlyURL) {
      if (response) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    } else {
      if (handleResponseStatus(response)) {
        return Promise.resolve(response);
      } else {
        // handleUnauthorizedResponses(response);

        return Promise.reject(response);
      }
    }
  });
};

const handleResponseStatus = (response) => {
  if (response && response.data && response.data.success) {
    return true;
  }
  return false;
};

const getCommonHeaders = () => {
  const state = loadState();
  let token = null;
  if (state && state.localStore && state.localStore.token) {
    token = state.localStore.token;
  }
  if (state && state.localStore && state.localStore.reset_pass_token) {
    token = state.localStore.reset_pass_token;
  }
  return {
    "Content-Type": "application/json",
    [authTokenKey]: token,
  };
};
const getFullUrl = (url) => {
  return `${baseUrl}${url}`;
};

export const getAnyTokenFromState = (state) => {
  const { localStore, session } = state;
  return {
    [authTokenKey]: localStore.token || session.token,
  };
};

export const getBaseUrl = () => {
  let baseUrl = apiBaseUrls.dev;
  if (process.env.REACT_APP_ENV === react_app_env.stage) {
    baseUrl = apiBaseUrls.stage;
  } else if (process.env.REACT_APP_ENV === react_app_env.prod) {
    baseUrl = apiBaseUrls.prod;
  }

  return baseUrl;
};
export { baseWebSocketURL };

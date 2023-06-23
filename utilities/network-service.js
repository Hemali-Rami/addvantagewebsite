import axios from "axios";
import Appstore from "../app/store";
import { errorToast } from "./utils";

const interCeptors = {
  setupInterceptors: (store, history) => {
    // Add a response interceptor
    return axios.interceptors.response.use(
      (response) => {
        // do something with the response data

        const { data } = response;
        if (data.status === 950 || data.status === 419) {
          history.push("/");
          localStorage.clear();
          Appstore.dispatch({ type: "CLEAR_LOCAL_STATE" });
          return response;
        }
        if (data.status === 304) {
          errorToast({ content: data.message || "Error" });
        }
        return response;
      },
      (error) => {
        if (error.message === "Network Error") {
        }
      }
    );
  },
};

export default interCeptors;

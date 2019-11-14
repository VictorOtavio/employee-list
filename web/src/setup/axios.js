import qs from "qs";
import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: "brackets" });
  }
});

export default axios;

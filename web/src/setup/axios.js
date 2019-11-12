import qs from "qs";
import Axios from "axios";

const axios = Axios.create({
  // TODO: A URL base deve vir de uma variável de ambiente
  baseURL: "http://127.0.0.1:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: "brackets" });
  }
});

export default axios;

import axios from "axios";

// GET API CAll FOR AUTH (3rd party api)
export const GetAuthAPIService = (Url: any) => {
  return axios.get(process.env.REACT_APP_BACKEND_AUTHENTICATION_URL + Url, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Adjust as needed
      "Access-Control-Allow-Headers": "Content-Type", // Adjust as needed
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
    },
  });
};
// GET API CAll
export const GetAPIService = (Url: any) => {
  return axios.get(process.env.REACT_APP_BACKEND_URL + Url);
};
// Post API CAll
export const PostAPIService = (Url: any, payload: any, config?: any) => {
  return axios.post(process.env.REACT_APP_BACKEND_URL + Url, payload, config);
};
// Put API Call
export const PutAPIService = (Url: any, payload: any) => {
  return axios.put(process.env.REACT_APP_BACKEND_URL + Url, payload);
};
// Delete API CAll
export const DeleteAPIService = (Url: any, payload: any) => {
  return axios.delete(process.env.REACT_APP_BACKEND_URL + Url, payload);
};

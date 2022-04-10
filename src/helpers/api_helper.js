// Functions to make API calls using axios
import axios from "axios";

// apply base url for axios
const REACT_APP_APP_URL = 'https://jsonplaceholder.typicode.com';

// Creates instance of axios with a custom config
const axiosApi = axios.create({
  baseURL: REACT_APP_APP_URL,
});

// Intercept request and response before they are handled by 'then' or catch'
axios.interceptors.request.use(function (config) {
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config) {
  return await axiosApi
    .get(url, {
      ...config,
    })
    .then((response) => response.data);
}

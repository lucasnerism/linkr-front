import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

function signIn(body) {
  const promise = axiosInstance.post(`${process.env.REACT_APP_API_URL}/sign-in`, body);
  return promise;
};

function signUp(body) {
  const promise = axiosInstance.post(`${process.env.REACT_APP_API_URL}/sign-up`, body);
  return promise;
};

const getUsers = () => {
  return axiosInstance.get('/users');
};

export default {
  getUsers
};
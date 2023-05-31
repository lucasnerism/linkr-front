import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

const getUsers = () => {
  return axiosInstance.get('/users');
};

export default {
  getUsers
};

export const logOutUser = () => {
  return axiosInstance.delete('/logout')
};

import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

const createHeader = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

function signIn(body) {
  const promise = axiosInstance.post(`/sign-in`, body);
  return promise;
};

function signUp(body) {
  const promise = axiosInstance.post(`/sign-up`, body);
  return promise;
};

const searchUsers = (query, token) => {
  return axiosInstance.get(`/user?${query}`, createHeader(token));
};

const getUserById = (id, token) => {
  return axiosInstance.get(`/user/${id}`, createHeader(token));
};

export const logOutUser = () => {
  return axiosInstance.delete('/logout')
};

export default {
  searchUsers,
  getUserById,
  signUp, 
  signIn
};
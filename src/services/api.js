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

const searchUsers = (query, token) => {
  return axiosInstance.get(`/user?${query}`, createHeader(token));
};

const getUserById = (id, token) => {
  return axiosInstance.get(`/user/${id}`, createHeader(token));
};

export const logOutUser = () => {
  return axiosInstance.delete('/logout')
};

export const editPostComment = (body, token) => {
  return axiosInstance.put(`/user/post`, body,createHeader(token));
};


export default {
  searchUsers,
  getUserById
};
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

const logOutUser = (token) => {
  return axiosInstance.delete('/sign-out', createHeader(token));
};

const editPostComment = (body, token) => {
  return axiosInstance.put(`/user/post`, body, createHeader(token));
};

const deletePost = (id, token) => {
  return axiosInstance.delete(`/post/${id}`, createHeader(token));
};


export default {
  searchUsers,
  getUserById,
  signUp, 
  signIn,
  logOutUser,
  editPostComment,
  deletePost
};
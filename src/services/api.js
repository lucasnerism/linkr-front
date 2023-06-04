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

const deletePost = (postId, token) => {
  return axiosInstance.delete(`/post/${postId}`, createHeader(token));
};

const getTrending = (token) => {
  return axiosInstance.get('/hashtag', createHeader(token));
};

const likePost = (id, token) => {
  return axiosInstance.post(`/post/${id}/like`, {}, createHeader(token));
};

const dislikePost = (id, token) => {
  return axiosInstance.post(`/post/${id}/dislike`, {}, createHeader(token));
};

const getPosts = (token) => {
  return axiosInstance.get(`/posts`, createHeader(token));
};

export default {
  searchUsers,
  getUserById,
  signUp,
  signIn,
  logOutUser,
  editPostComment,
  deletePost,
  getTrending,
  likePost,
  dislikePost,
  getPosts
};
import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzQyMTU0ODIxOGRmNDMzNTcyMTcxM2I0MTdkNWEyYiIsIm5iZiI6MTczMDA2NzA2NS4zNTgwNDIsInN1YiI6IjY3MDk2ZmM5YjBjNGY3YTUzNjFhMmI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iQqxINucNq9rsckWB1et9tOkm7nnLzKzY3oVYQ7er5o";

const TokenAndBaseUrl = axios.create({
  baseURL: BASE_URL,
});

TokenAndBaseUrl.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default TokenAndBaseUrl;

import axios from "axios";

const createApi = () => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // withCredentials: true,
  });

  return api;
};

export const api = createApi();

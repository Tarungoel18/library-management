import axiosInstance from "../../service/axiosInstance.js";

export const loginUser = async (credentials) => {
  const response = await axiosInstance.post("/login", credentials);
  return response.data;
};

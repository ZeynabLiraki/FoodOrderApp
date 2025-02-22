import axios, { isAxiosError } from "axios";
import { BaseURL } from "./Urls";

export const instanceFood = axios.create({
  baseURL: BaseURL,
  headers: { "Content-Type": "application/json" }
});

instanceFood.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (isAxiosError(error)) {
      console.log("Error: ", error.message);
      return Promise.reject(error);
    }
  }
);

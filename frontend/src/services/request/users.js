import axios from "axios";
import { API_URL_BASE } from "../constante";

export const getAllUsers = async () => {
  const response = await axios.get(API_URL_BASE + "/users/?format=json");
  return response;
};

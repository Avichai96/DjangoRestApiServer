import axios from "axios";
import { API_URL_BASE } from "../constante";

export const getAllContacts = async () => {
  const response = await axios.get(API_URL_BASE + "/usercontacts/?format=json");
  return response;
};

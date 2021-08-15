import axios from "axios";
import { API_URL_BASE } from "../constante.js";

axios.defaults.headers.common['X-CSRFToken'] = document.querySelector('[name=csrfmiddlewaretoken]').value;


export const getAllUsers = async () => {
  const response = await axios.get(API_URL_BASE + "/users/?format=json");
  return response;
};

export const addUser = async (user) => {
  const response = await axios.post(API_URL_BASE + "/users/?format=json", user);
  return response;
};

export const deleteUser = async (dluser) => {
  const response = await axios.delete(API_URL_BASE + "/users/"+dluser);
  return response;
};
import axios from "axios";
import { API_URL_BASE } from "../constante.js";

axios.defaults.headers.common['X-CSRFToken'] = document.querySelector('[name=csrfmiddlewaretoken]').value;

export const getAllContacts = async () => {
  const response = await axios.get(API_URL_BASE + "/usercontacts/?format=json");
  return response;
};

export const addContact = async (contact) => {
  const response = await axios.post(API_URL_BASE + "/usercontacts/?format=json", contact);
  return response;
};

export const deleteContact = async (dlcontact) => {
  const response = await axios.delete(API_URL_BASE + "/usercontacts/"+dlcontact);
  return response;
};
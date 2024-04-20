import Cookies from "js-cookie";

export const API = `/https://api.freeapi.app/api/v1`;

const token = Cookies.get(`token`);

export const JSONGET = {
  Authorization: `Bearer ${token}`,
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};

export const Multipart = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "multipart/form-data",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};

export const JSONNOTGET = {
  Authorization: `Bearer ${token}`,
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};

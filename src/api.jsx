// src/api.js
import axios from "axios";

export const baseURL = "https://indokonabackend-1.onrender.com/";

export const api = axios.create({
  baseURL: baseURL,
});

// set auth header helpers
export function getAuthHeaderForRole(roleKey) {
  const token = localStorage.getItem(roleKey);
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export function setTokenForRole(roleKey, access) {
  localStorage.setItem(roleKey, access);
}

export function clearRoleToken(roleKey) {
  localStorage.removeItem(roleKey);
}

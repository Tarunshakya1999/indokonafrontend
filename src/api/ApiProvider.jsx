import React, { useEffect, useMemo, useState, createContext, useContext } from "react";
import axios from "axios";

const ApiContext = createContext(null);

export function ApiProvider({ children }) {
  const [baseURL, setBaseURL] = useState(localStorage.getItem('api_base_url') || "https://indokonabackend-1.onrender.com/api");
  const [token, setToken] = useState(localStorage.getItem('api_token') || "");
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem("api_base_url", baseURL);
    localStorage.setItem("api_token", token);
    localStorage.setItem("theme", theme);
  }, [baseURL, token, theme]);

  const client = useMemo(() => {
    const instance = axios.create({ baseURL });
    instance.interceptors.request.use(config => {
      if (token) {
        config.headers["Authorization"] = token.startsWith("Token ") || token.startsWith("Bearer ")
          ? token
          : `Token ${token}`;
      }
      config.headers["Content-Type"] = "application/json";
      return config;
    });
    return instance;
  }, [baseURL, token]);

  return (
    <ApiContext.Provider value={{ client, baseURL, setBaseURL, token, setToken, theme, setTheme }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}

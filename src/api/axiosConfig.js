// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ipinfo.io/58.8.155.7',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

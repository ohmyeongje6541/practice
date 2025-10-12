// src/api/index.js
import axios from "axios";

// axios 인스턴스 생성 및 할당
const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com", // ✅ < > 제거
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 5000,
});

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axios 인스턴스 내보내기
export default axiosInstance;

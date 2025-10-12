import axiosInstance from ".";

export const quoteAPI = {
  getQuotes: async () => {
    const response = await axiosInstance.get("/quotes");
    return response["quotes"];
  },
  getRandomQuote: async () => {
    const response = await axiosInstance.get(`/quotes/random`);
    return response; // 또는 response["quote"]
  },
};

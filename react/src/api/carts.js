import axiosInstance from ".";

export const cartAPI = {
  getCarts: async () => {
    const response = await axiosInstance.get("/carts");
    return response["carts"]; // ✅ return 누락 수정
  },
  getCart: async (user) => {
    const response = await axiosInstance.get(`/carts/${user}`);
    return response["carts"];
  },
};

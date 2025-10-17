import axiosInstance from ".";

export const productAPI = {
  getProducts: async () => {
    const response = await axiosInstance.get("/products");
    return response["products"];
  },
  getProduct: async (id) => {
    const response = await axiosInstance.get(`/products/${id}`);
    return response;
  },
  searchProduct: async (search) => {
    const response = await axiosInstance.get(`/products/search?q=${search}`);
    return response["products"];
  },
  getProductsByCategory: async (category) => {
    const response = await axiosInstance.get(`/products/category/${category}`);
    return response["products"];
  },
};

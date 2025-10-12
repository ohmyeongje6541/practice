import axiosInstance from ".";

export const postAPI = {
  getPosts: async () => {
    const response = await axiosInstance.get("/posts");
    return response["posts"];
  },
  getPost: async (id) => { 
    const response = await axiosInstance.get(`/posts/${id}`);
    return response; 
  },
  searchPosts: async (search) => {
    const response = await axiosInstance.get(`/posts/search?q=${search}`);
    return response["posts"];
  },
};

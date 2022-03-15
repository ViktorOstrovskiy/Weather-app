import instance from "./instance";

export default {
  setupInterceptors: () => {
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  },
};

import axios from "axios";

const http = axios.create({
  baseURL: `http://localhost:8000`,
  withCredentials: true,
});

http.interceptors.request.use((request: any) => {
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "access_token"
    )}`;
  }

  return request;
});

http.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async (error: any) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    try {
      const response = await http.get("/users/auth/refresh"); // sends back a access_token
      const access_token = response.data.access_token;

      localStorage.setItem("access_token", access_token);
      error.hasrefreshedToken = true;

      return Promise.reject(error);
    } catch (error) {
      const tokenError = new Error("Cannot refresh token");
      return Promise.reject(tokenError);
    }
  }
);

export default http;

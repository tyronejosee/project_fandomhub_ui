import axios from "axios";

const getBaseUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return import.meta.env.VITE_BACKEND_URL;
  }
  return "http://localhost:8000";
};

const tasksApi = axios.create({
  baseURL: `${getBaseUrl()}/api/v1/genres`,
});

export const getGenres = () => tasksApi.get("/");

export const getGenre = (id) => tasksApi.get(`/${id}`);

// export const createGenre = (task) => tasksApi.post("/", genre);

// export const updateGenre = (id, task) => tasksApi.put(`/${id}/`, genre);

// export const deleteGenre = (id) => tasksApi.delete(`/${id}`);

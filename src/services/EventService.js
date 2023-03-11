import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/smkarber/real-world-vue3/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getEvents(limit, page) {
    return apiClient.get(`/events?_limit=${limit}&_page=${page}`);
  },
  getEventById(id) {
    return apiClient.get(`events/${id}`);
  },
};

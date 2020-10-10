import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.unsplash.com'
});

export default API;
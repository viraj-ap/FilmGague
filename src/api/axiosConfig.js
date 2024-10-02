import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080',  // Base URL pointing to your backend server running locally
  headers: { "skip-browser-warning": "true" }  // Add any additional headers
});

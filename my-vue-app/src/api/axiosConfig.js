import axios from 'axios';

const githubClient = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 5000,
  headers: {
    'Accept': 'application/vnd.github.v3+json'
    // ADD TOKEN HERE
  }
});

githubClient.interceptors.response.use(
  response => response,
  error => {
    console.error('Error de API:', error.response?.status);
    return Promise.reject(error);
  }
);

export default githubClient;
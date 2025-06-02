import axios from 'axios';

// aca va la URL cuando tenga el backend corriendo en RENDER
const api = axios.create({
  baseURL: 'http://localhost:5000/api'  
});

    export const getProducts = () => api.get('/products');
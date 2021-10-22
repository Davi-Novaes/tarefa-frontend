import axios from 'axios'
 
const api = axios.create({
            baseURL: 'https://tarefa-frontend-nodejs.herokuapp.com'
});
export default api;

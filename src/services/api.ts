import axios from 'axios'
 
const api = axios.create({
            baseURL: 'https://tarefa-backend-nodejs.herokuapp.com/'
});
export default api;

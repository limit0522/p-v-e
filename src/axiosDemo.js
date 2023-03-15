import axios from 'axios'
const API = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 2000
})
// API.interceptors.request.use(function(config){
//     config.headers.token = '123';
//     return config;
// })
API.interceptors.response.use(function(response){
    let data = response.data;
    //console.log(data);
    return data;
})
export default API

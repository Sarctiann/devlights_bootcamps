import axios from 'axios'

const API = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/forecast',
    timeout: 5000,
})

// interceptor de petición
API.interceptors.request.use(
    (config) => {
        config.url += '&lang=es&appid=8a5e9515a6583a0a93a8e614d848ffb5'
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default API
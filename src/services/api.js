import axios from 'axios'

const API = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/forecast?q=corrientes&lang=es&appid=8a5e9515a6583a0a93a8e614d848ffb5',
    timeout: 5000,
})

// por si los necesito luego
// interceptor de petición
API.interceptors.request.use(
    function (config) {
        config.headers = { ...config.headers }
        return config;
    },
    function (error) {
        return Promise.reject(error)
    }
)

// interceptor de respuesta
API.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        console.log(error)
        const newError = {
            message: 'An error has ocurred',
            status: error.response.status,
            serverMessage: error.response?.data?.message,
        }
        return Promise.reject(newError)
    }
)

export default API
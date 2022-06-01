import axios from 'axios'

const API = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    timeout: 5000,
})

// interceptor de petición
API.interceptors.request.use(
    (config) => {
        config.url += '&appid=8a5e9515a6583a0a93a8e614d848ffb5'
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)


const api = {
    get_weather: async (id) => {
        try {
            const res = await API.get(`weather?id=${id}&lang=es&unit=metric`)
            if (res['data']) {
                return await res.data
            }
        }
        catch (err) {
            console.error(err)
        }
    },
    get_forecast: async (id) => {
        try {
            const res = await API.get(`forecast?id=${id}&lang=es&unit=metric`)
            if (res['data']) {
                return await res.data
            }
        }
        catch (err) {
            console.error(err)
        }
    }
}


export default api
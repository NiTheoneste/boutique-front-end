import axios from 'axios'
import store from '../store'

export const axiosService = axios.create({
	baseURL: "http://127.0.0.1:8000/api/"
})

axiosService.interceptors.request.use((config) => {
	config.headers.Authorization = store.state.user?.access ? `Bearer ${store.state.user?.access}` : ''
	return config
})


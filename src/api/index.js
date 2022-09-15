import axios from 'axios'
import { BACKEND_URL } from '../constants/url'

const API = axios.create({ baseURL: BACKEND_URL })

// user endpoints

export const login = (values) => API.post('/login', values)
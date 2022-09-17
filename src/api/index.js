import axios from 'axios'
import { BACKEND_URL } from '../constants/url'

const API = axios.create({ baseURL: BACKEND_URL })

let authHeader = {
    Authorization: (JSON.parse(localStorage.getItem("userInfo"))).token,
    'Content-Type': 'application/json'
}
console.log(authHeader)

// user endpoints

export const login = (values) => API.post('/login', values)
export const getPost = (pageNumber, pageLength) => API.get(`/getPost?pageNumber=${pageNumber}&pageLength=${pageLength}`)
export const getStudentsToFollow = () => API.get('/getStudentsToFollow', { Headers: authHeader })
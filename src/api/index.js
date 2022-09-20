import axios from 'axios'
import { BACKEND_URL } from '../constants/url'

const API = axios.create({ baseURL: BACKEND_URL })

let authHeader = {
    authorization: (JSON.parse(localStorage.getItem("userInfo")))?.token,
}

// user endpoints

export const login = (values) => API.post('/login', values)
export const getPost = (pageNumber, pageLength) => API.get(`/getPost?pageNumber=${pageNumber}&pageLength=${pageLength}`)
export const getStudentsToFollow = () => API.get('/getStudentsToFollow', { headers: authHeader })
export const getTopPicsForYou = (pageNumber, pageLength) => API.get(`/topicsForU?pageNumber=${pageNumber}&pageLength=${pageLength}`, { headers: authHeader })
import axios from 'axios'
import { BACKEND_URL } from '../constants/url'

const API = axios.create({ baseURL: BACKEND_URL })

let headers = {
    authorization: (JSON.parse(localStorage.getItem("userInfo")))?.token,
}

// login endpoints
export const login = (values) => API.post('/login', values)
export const getStarted = (values) => API.post('/getStarted', values)
export const forgotPassword = (values) => API.post('/forgotPassword', values)

// home endpoints
export const getPost = (pageNumber, pageLength) => API.get(`/getPost?pageNumber=${pageNumber}&pageLength=${pageLength}`)
export const getStudentsToFollow = () => API.get('/getStudentsToFollow', headers)

// topPics endpoints
export const getTopPicsForYou = (pageNumber, pageLength) => API.get(`/topicsForU?pageNumber=${pageNumber}&pageLength=${pageLength}`, headers)
export const getAllStudents = () => API.get('/getAllStudents', headers)
export const getProfilePosts = (pageNumber, pageLength) => API.get(`/profilePosts?pageNumber=${pageNumber}&pageLength=${pageLength}`, headers)

// chatbot endpoints
export const getWhatsNewData = () => API.get('/getWhatsNewData', headers)
export const getInstaData = () => API.get('/getInstaData', headers)
export const getFacebookData = () => API.get('/getFacebookData', headers)
export const getTwitterData = () => API.get('/getTwitterData', headers)
export const getSlides = () => API.get('/getSlides', headers)
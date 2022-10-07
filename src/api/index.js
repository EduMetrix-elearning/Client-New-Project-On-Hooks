import axios from 'axios'
import { BACKEND_URL } from '../constants/url'

const API = axios.create({ baseURL: BACKEND_URL })

let authHeader = {
    authorization: (JSON.parse(localStorage.getItem("userInfo")))?.token,
}

// login endpoints
export const login = (values) => API.post('/login', values)
export const getStarted = (values) => API.post('/getStarted', values)
export const forgotPassword = (values) => API.post('/forgotPassword', values)

// signUp endpoints
export const submitSignUpDetails = (FormData) => API.post('/submit', FormData)
export const imageToDB = (FormData) => API.post('/imageToDB', FormData)
export const verifyOtp = (values) => API.post('/verifyOtp', values)
export const resendOTP = (values) => API.post('/resendOTP', values)

// home endpoints
export const getPost = (pageNumber, pageLength) => API.get(`/getPost?pageNumber=${pageNumber}&pageLength=${pageLength}`)
export const getStudentsToFollow = () => API.get('/getStudentsToFollow', { headers: authHeader })
export const createPost = (values) => API.post('/createPost', values,)

// posts endpoints
export const getLikeStatus = (values) => API.post('/getLikeStatus', values, { headers: authHeader })
export const postLike = (values) => API.post('/postLike', values, { headers: authHeader })
export const CommentsCount = (values) => API.post('/CommentsCount', values, { headers: authHeader })
export const getAllComments = (values) => API.post('/allComments', values, { headers: authHeader })
export const postComment = (values) => API.post('/commentPost', values, { headers: authHeader })
export const getAllLikes = (values) => API.post('/getAllLikes', values, { headers: authHeader })

// topPics endpoints
export const getTopPicsForYou = (pageNumber, pageLength) => API.get(`/topicsForU?pageNumber=${pageNumber}&pageLength=${pageLength}`, { headers: authHeader })
export const getAllStudents = () => API.get('/getAllStudents', { headers: authHeader })
export const getProfilePosts = (pageNumber, pageLength) => API.get(`/profilePosts?pageNumber=${pageNumber}&pageLength=${pageLength}`, { headers: authHeader })

// chatbot endpoints
export const getWhatsNewData = () => API.get('/getWhatsNewData', { headers: authHeader })
export const getInstaData = () => API.get('/getInstaData', { headers: authHeader })
export const getFacebookData = () => API.get('/getFacebookData', { headers: authHeader })
export const getTwitterData = () => API.get('/getTwitterData', { headers: authHeader })
export const getSlides = () => API.get('/getSlides', { headers: authHeader })

// live-chat endpoints
export const getConversation = (req) => API.get(`/conversation/${req.senderId}/${req.receiverId}?pageNumber=1&rowsOfPage=1000`, { headers: authHeader })

// earnings endpoints
export const getAllEarningLikes = () => API.get('/earnings/likeStats', { headers: authHeader })
export const getShareData = () => API.get('/earnings/shareStats', { headers: authHeader })
export const getReferralData = () => API.get('/earnings/referralStats', { headers: authHeader })
export const getBounsData = () => API.get('/earnings/bonusStats', { headers: authHeader })
export const getLikes = () => API.get('/totalLikes', { headers: authHeader })
export const likesEarning = () => API.get('/totalLikesEarning', { headers: authHeader })
export const getDetails = () => API.get('/earningDetails', { headers: authHeader })
export const getCurrency = () => API.get('/currency', { headers: authHeader })
export const getAdditionalBonus = () => API.get('/getAdditionalBonus', { headers: authHeader })
export const getSocialMediaSharingContent = () => API.get('/socialMarketingContents', { headers: authHeader })
export const withdrawRequest = () => API.get('/withdrawEmc', { headers: authHeader })
export const sendWithdrawRequest = (data) => API.post('/withdraws', data, { headers: authHeader })
export const getSocialShareStatus = (values) => API.post('/getSocialShareStatus', values, { headers: authHeader })
export const createSocialShare = () => API.post('/createSocialShare', { headers: authHeader })
export const getTotalCounters = () => API.post('/getTotalCounters', { headers: authHeader })

// wallet endpoints
export const fetchPublicKeyForQRCode = () => API.get('/walletQRcode', { headers: authHeader })
export const fetchLatestPrice = () => API.get('/https://api.coingecko.com/api/v3/coins/edumetrix-coin', { headers: authHeader })
export const getTotalEarnings = () => API.get('/totalEarnings', { headers: authHeader })
export const sendKeyTo = (values) => API.get('/walletSend', values, { headers: authHeader })
export const walletCoinConfirm = (values) => API.post('/walletCoinConfirm', values, { headers: authHeader })
export const walletOTPVerify = (values) => API.post('/walletOtpVerify', values, { headers: authHeader })
export const walletOTPConfirm = (values) => API.post('/walletOtpConfirm', values, { headers: authHeader })
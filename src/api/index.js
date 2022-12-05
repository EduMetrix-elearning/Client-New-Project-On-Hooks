import axios from 'axios'
// import { useEffect } from 'react'
import { BACKEND_URL } from '../constants/url'
// import { userInfo } from '../utils/localStorage_Utils'

const API = axios.create({ baseURL: BACKEND_URL })

// let authHeader
// setTimeout(() => {
//     let User = JSON.parse(localStorage.getItem("userInfo"))
//     authHeader = {
//         authorization: User?.token
//     }
// }, 0)



function getHeader() {
    let User = JSON.parse(localStorage.getItem("userInfo"))
    let authHeader = {
        authorization: User?.token
    }
    return authHeader
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
export const getStudentsToFollow = () => API.get('/getStudentsToFollow', { headers: getHeader() })
export const createPost = (values) => API.post('/createPost', values, { headers: getHeader() })
export const postImagePost = (values) => API.post('/postImagePost', values, { headers: getHeader() })
export const postDocPost = (values) => API.post('/postDocPost', values, { headers: getHeader() })
export const postVideoPost = (values) => API.post('/postVideoPost', values, { headers: getHeader() })
export const reportPost = (values) => API.post('/report', values, { headers: getHeader() })

// posts endpoints
export const getLikeStatus = (values) => API.post('/getLikeStatus', values, { headers: getHeader() })
export const postLike = (values) => API.post('/postLike', values, { headers: getHeader() })
export const CommentsCount = (values) => API.post('/CommentsCount', values, { headers: getHeader() })
export const getAllComments = (values) => API.post('/allComments', values, { headers: getHeader() })
export const postComment = (values) => API.post('/commentPost', values, { headers: getHeader() })
export const getAllLikes = (values) => API.post('/getAllLikes', values, { headers: getHeader() })

// topPics endpoints
export const getTopPicsForYou = (pageNumber, pageLength) => API.get(`/topicsForU?pageNumber=${pageNumber}&pageLength=${pageLength}`, { headers: getHeader() })
export const getAllStudents = () => API.get('/getAllStudents', { headers: getHeader() })
export const getProfilePosts = (pageNumber, pageLength) => API.get(`/profilePosts?pageNumber=${pageNumber}&pageLength=${pageLength}`, { headers: getHeader() })

// chatbot endpoints
export const getWhatsNewData = () => API.get('/getWhatsNewData', { headers: getHeader() })
export const getInstaData = () => API.get('/getInstaData', { headers: getHeader() })
export const getFacebookData = () => API.get('/getFacebookData', { headers: getHeader() })
export const getTwitterData = () => API.get('/getTwitterData', { headers: getHeader() })
export const getSlides = () => API.get('/getSlides', { headers: getHeader() })
export const botQueries = (values) => API.post('/queries', values, { headers: getHeader() })

// live-chat endpoints
export const getConversation = (req) => API.get(`/conversation/${req.senderId}/${req.receiverId}?pageNumber=1&rowsOfPage=1000`, { headers: getHeader() })
export const chatVideoUpload = (values) => API.post('/chatVideoUpload/', values, { headers: getHeader() })
export const liveChatmessage = (values) => API.post('/liveChatmessage/', values, { headers: getHeader() })

// earnings endpoints
export const getAllEarningLikes = () => API.get('/earnings/likeStats', { headers: getHeader() })
export const getShareData = () => API.get('/earnings/shareStats', { headers: getHeader() })
export const getReferralData = () => API.get('/earnings/referralStats', { headers: getHeader() })
export const getBounsData = () => API.get('/earnings/bonusStats', { headers: getHeader() })
export const getLikes = () => API.get('/totalLikes', { headers: getHeader() })
export const likesEarning = () => API.get('/totalLikesEarning', { headers: getHeader() })
export const getDetails = () => API.get('/earningDetails', { headers: getHeader() })
export const getCurrency = () => API.get('/currency', { headers: getHeader() })
export const getAdditionalBonus = () => API.get('/getAdditionalBonus', { headers: getHeader() })
export const getSocialMediaSharingContent = () => API.get('/socialMarketingContents', { headers: getHeader() })
export const withdrawRequest = () => API.get('/withdrawEmc', { headers: getHeader() })
export const sendWithdrawRequest = (data) => API.post('/withdraws', data, { headers: getHeader() })
export const getSocialShareStatus = (values) => API.post('/getSocialShareStatus', values, { headers: getHeader() })
export const createSocialShare = () => API.post('/createSocialShare', { headers: getHeader() })
export const getTotalCounters = () => API.post('/getTotalCounters', { headers: getHeader() })

// wallet endpoints
export const fetchPublicKeyForQRCode = () => API.get('/walletQRcode', { headers: getHeader() })
export const fetchLatestPrice = () => axios.get('https://api.coingecko.com/api/v3/coins/edumetrix-coin')
export const getTotalEarnings = () => API.get('/totalEarnings', { headers: getHeader() })
export const sendKeyTo = (values) => API.post('/walletSend', values, { headers: getHeader() })
export const walletCoinConfirm = (values) => API.post('/walletCoinConfirm', values, { headers: getHeader() })
export const walletOTPVerify = (values) => API.post('/walletOtpVerify', values, { headers: getHeader() })
export const walletOTPConfirm = (values) => API.post('/walletOtpConfirm', values, { headers: getHeader() })
export const fetchAllTransactions = (values) => axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${values.publicKey}&startblock=0&endblock=99999999&sort=asc&apikey=${values.apiKey}`)

// profile endpoints
export const getFollowers = (values) => API.post('/followers', values, { headers: getHeader() })
export const getFollowings = (values) => API.post('/following', values, { headers: getHeader() })
export const insertDescription = (values) => API.post('/profileDescription', values, { headers: getHeader() })
export const insertFamily = (values) => API.post('/profileFamily', values, { headers: getHeader() })
export const insertHobbies = (values) => API.post('/userHobbies', values, { headers: getHeader() })
export const insertSkills = (values) => API.post('/userSkills', values, { headers: getHeader() })
export const insertEducationalDetails = (values) => API.post('/educationsDetails', values, { headers: getHeader() })
export const insertLifeAmbition = (values) => API.post('/lifeAmbition', values, { headers: getHeader() })
export const updateProfileData = (values) => API.post('/updateProfile', values, { headers: getHeader() })
export const deletePost = (values) => API.post('/deletePost', values, { headers: getHeader() })
export const editPost = (values) => API.post('/editPost', values, { headers: getHeader() })

// find friends endpoints
export const followFriend = (values) => API.post('/follow', values, { headers: getHeader() })
export const searchFriends = (values) => API.post('/searchFriends', values, { headers: getHeader() })
export const filterStudents = (obj) => API.get(`/getStudentsToFollow?student_country=${obj.student_country}&university=${obj.university}&school=${obj.school}`, { headers: getHeader() })
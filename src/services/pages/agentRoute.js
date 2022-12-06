import Axios from "axios"
const baseurl = require("./generalUrl")
const ls = require('local-storage')



// export const agentSignup =(values,callback)=>{
//  try{
//      axios.post(Url.GetUrl() + "/agent/get-started" ,values)
//     .then((response)=>{
        
//         // let res = response.data.json()
//         console.log("getting agent result" , response)
//         // let id = await localStorage.set("agentregisteredId",response.json())
//         // return callback(null,response)
//     }).catch((error)=>{
//         return callback(error)
//     })
//  }
//  catch(error){
//     return callback(error)
//  }
// }

export function agentSignup(values, callback) {
    Axios.post(baseurl.GetUrl() + "/agent/get-started", values).then(async (response) => {
        console.log("api response", response)
        if (response.data) {
            await ls.set("agent_id", response.data.agent_id)
            return callback(null, response)
        }
    }).catch((error) => {
        if (error.response) {
            alert(error.response.data.message);
        }
        return callback(error)

    })
}
export function otpVarify(values, callback) {
    Axios.post(baseurl.GetUrl() + "/agent/verifyOtp", values).then(async (response) => {
        console.log("api response", response)
        if (response.data) {
            return callback(null, response)
        }
    }).catch((error) => {
        if (error.response) {
            alert(error.response.data.message);
        }
        return callback(error)

    })
}


// export const otpVarify=(values,callback)=>{
//     axios.post(Url.GetUrl() + "/verifyOtp", values).then((response) => {
//         console.log("otp verify==", response);
//         if (response) {
//             return callback(null, response)
//         }
//     }).catch((error) => {
//         return callback(error)
//     })
// }


// export const resendOTP=(values, callback)=> {

//     axios.post(Url.GetUrl() + "/resendOTP", values).then((response) => {
//         if (response) {
//             return callback(null, response)
//         }
//     }).catch((error) => {
//         return callback(error)
//     })
// }
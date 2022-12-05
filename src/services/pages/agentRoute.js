import axios from "axios"
const Url = require("./generalUrl")
const localStorage = require('local-storage')



export const agentSignup =(values,callback)=>{
 try{
     axios.post(Url.GetUrl() + "/agentsignup" ,values)
    .then((response)=>{
        
        // let res = response.data.json()
        console.log("getting agent result" , response)
        // let id = await localStorage.set("agentregisteredId",response.json())
        // return callback(null,response)
    }).catch((error)=>{
        return callback(error)
    })
 }
 catch(error){
    return callback(error)
 }
}


export const otpVarify=(values,callback)=>{
    axios.post(Url.GetUrl() + "/verifyOtp", values).then((response) => {
        console.log("otp verify==", response);
        if (response) {
            return callback(null, response)
        }
    }).catch((error) => {
        return callback(error)
    })
}


export const resendOTP=(values, callback)=> {

    axios.post(Url.GetUrl() + "/resendOTP", values).then((response) => {
        if (response) {
            return callback(null, response)
        }
    }).catch((error) => {
        return callback(error)
    })
}
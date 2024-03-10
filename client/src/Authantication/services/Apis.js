// import { commonrequest } from "./ApiCall";
// import {BACKEND_URL} from "./helper";
import { commonrequest } from "./ApiCall"
import { BACKEND_URL } from "./helper"


export const registerfunction = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/register`,data)
}

export const sentOtpFunction = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/users/email`,data)
}
export const passWordReset = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/users/newpassword`,data)
}
export const userVerify = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/users/otp`,data)
}
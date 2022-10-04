import { submitSignUpDetails, verifyOtp } from "../../api"

export const submitHandle = async (input) => {
    let obj = {
        "student_id": localStorage.getItem("userId"),
        "student_dob": input.dob,
        "gender": input.gender,
        "student_address": input.address,
        "student_country": input.country,
        "student_state": input.state,
        "school": input.school,
        "reference_by": input.referBy,
        "university": input.university
    }
    const response = await submitSignUpDetails(obj)
    return response
}

export const OtpSubmitHandle = async (OTPs) => {
    let obj = {
        "student_id": localStorage.getItem("userId"),
        "email_otp": OTPs.email,
        "mobile_otp": OTPs.mobile
    }
    const response = await verifyOtp(obj)
    return response
}
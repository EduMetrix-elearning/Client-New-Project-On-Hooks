import Axios from "axios";
const baseurl = require("./generalUrl");
const ls = require("local-storage");

export function agentSignup(values, callback) {
  Axios.post(baseurl.GetUrl() + "/agent/get-started", values)
    .then(async (response) => {
      if (response.data) {
        await ls.set("agent_id", response.data.agent_id);
        return callback(null, response);
      }
    })
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.message);
      }
      return callback(error);
    });
}
export function otpVarify(values, callback) {
  Axios.post(baseurl.GetUrl() + "/agent/verifyOtp", values)
    .then(async (response) => {
      if (response.data) {
        return callback(null, response);
      }
    })
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.message);
      }
      return callback(error);
    });
}
export function agentLogin(values, callback) {
  Axios.post(baseurl.GetUrl() + "/agent/login", values)
    .then(async (response) => {
      if (response.data) {
        await ls.set("id", response.data.id);
        await ls.set("token", response.data.token);
        return callback(null, response);
      }
    })
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.message);
      }
      return callback(error);
    });
}

export function agentKYC(values, callback) {
  Axios.post(baseurl.GetUrl() + "/agent/submit", values)
    .then(async (response) => {
      if (response.data) {
        return callback(null, response);
      }
    })
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.message);
      }
      return callback(error);
    });
}

export function uploadImages(formData, callback) {
  Axios.post(baseurl.GetUrl() + "/agent/imageToDB", formData);
}

export function agentInfo(callback) {
  Axios.get(baseurl.GetUrl() + "/agent/" + ls.get("id"))
    .then(async (response) => {
      if (response.data) {
        return callback(null, response.data.data);
      }
    })
    .catch((error) => {
      if (error.response) {
      }
      return callback(error);
    });
}

export function referralSubmit(values, callback) {
  Axios.post(baseurl.GetUrl() + "/agent/submit-referral", values)
    .then(async (response) => {
      if (response.data) {
        return callback(null, response);
      }
    })
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.message);
      }
      return callback(error);
    });
}

export function agentReferrals(callback) {
  Axios.get(baseurl.GetUrl() + "/agent/referrals/" + ls.get("id"))
    .then(async (response) => {
      if (response.data) {
        return callback(null, response.data.data);
      }
    })
    .catch((error) => {
      if (error.response) {
      }
      return callback(error);
    });
}

export async function allAgents() {
  try {
    const agents = await Axios.get(baseurl.GetUrl() + "/agent");
    return agents.data.data;
  } catch (error) {}
}

export async function agentAllReferrals() {
  try {
    const referrals = await Axios.get(
      baseurl.GetUrl() + "/agent/students/allstudents"
    );
    return referrals.data.data;
  } catch (error) {}
}

export async function updateReferralStatus(status, id) {
  try {
    await Axios.put(baseurl.GetUrl() + `/agent/referrals/status/${id}`, status);
  } catch (error) {
    alert(error.response.data.message);
  }
}

export async function getAgent(id) {
  try {
    const agent = await Axios.get(baseurl.GetUrl() + `/agent/${id}`);
    return agent.data.data;
  } catch (error) {
    alert(error.response.data.message);
  }
}
export async function getStudentByAgent(id) {
  try {
    const students = await Axios.get(
      baseurl.GetUrl() + `/agent/referrals/${id}`
    );
    return students.data.data;
  } catch (error) {
    alert(error.response.data.message);
  }
}

export async function getStudentBill(bill) {
  try {
    const students = await Axios.get(baseurl.GetUrl() + "/student_billings");

    return students.data.data;
  } catch (error) {
    alert(error.response.data.message);
  }
}

export async function submitStudentBill(bill) {
  try {
    const students = await Axios.post(
      baseurl.GetUrl() + "/student_billings",
      bill
    );

    return students.data;
  } catch (error) {
    console.log(error);
    alert(error.message);
    alert(error.response.data.message);
  }
}

export async function verifyOtp(obj) {
  try {
    const otp = await Axios.post(
      baseurl.GetUrl() + "/agent/forgotPassword",
      obj
    );

    return otp.data;
  } catch (error) {
    alert(error.message);
    alert(error.response.data.message);
  }
}

export async function resetPassword(obj) {
  try {
    const result = await Axios.post(
      baseurl.GetUrl() + "/agent/resetPassword",
      obj
    );

    return result.data;
  } catch (error) {
    alert(error.message);
    alert(error.response.data.message);
  }
}

export async function submitEmployee(obj) {
  try {
    const result = await Axios.post(
      baseurl.GetUrl() + "/employee_registeration",
      obj
    );

    return result.data;
  } catch (error) {
    alert(error.message);
    alert(error.response.data.message);
  }
}

export async function getEmployee() {
  try {
    const result = await Axios.get(
      baseurl.GetUrl() + "/employee_registeration"
    );

    return result.data;
  } catch (error) {
    alert(error.message);
    alert(error.response.data.message);
  }
}
export async function getInternship() {
  try {
    const result = await Axios.get(baseurl.GetUrl() + "/student_internship");

    return result.data;
  } catch (error) {
    alert(error.message);
    alert(error.response.data.message);
  }
}

export async function submitInternship(obj) {
  try {
    const result = await Axios.post(
      baseurl.GetUrl() + "/student_internship",
      obj
    );
    console.log(result);

    return result.data;
  } catch (error) {
    alert(error.message);
    alert(error.response.data.message);
  }
}

export async function getEnquiry() {
  try {
    const result = await Axios.get(baseurl.GetUrl() + "/student_enquiry");
    console.log(result);

    return result.data;
  } catch (error) {
    alert(error.message);
    alert(error.response.data);
  }
}

export async function submitEnquiry(obj) {
  try {
    const result = await Axios.post(baseurl.GetUrl() + "/student_enquiry", obj);
    return result.data;
  } catch (error) {
    alert(error.message);
    alert(error.response.data.message);
  }
}

export async function updateStudentEnquiryStatus(status, id) {
  try {
    await Axios.put(baseurl.GetUrl() + `/student_enquiry/status/${id}`, status);
  } catch (error) {
    alert(error.response.data.message);
  }
}

export async function getSyllabus() {
  try {
    const result = await Axios.get(baseurl.GetUrl() + "/student_syllabus");
    console.log(result);

    return result.data;
  } catch (error) {
    alert(error.message);
    alert(error.response.data.message);
  }
}

export async function submitSyllabus(obj) {
  try {
    const result = await Axios.post(
      baseurl.GetUrl() + "/student_syllabus",
      obj
    );
    return result.data;
  } catch (error) {
    alert(error.message);
    alert(error.response.data.message);
  }
}

export async function getCollaborators() {
  try {
    const result = await Axios.get(baseurl.GetUrl() + "/collaborators");

    return result.data;
  } catch (error) {
    alert(error.message);
    alert(error.response.data.message);
  }
}

export async function submitCollaborators(obj) {
  try {
    const result = await Axios.post(baseurl.GetUrl() + "/collaborators", obj);
    return result.data;
  } catch (error) {
    alert(error.message);
    alert(error.response.data.message);
  }
}

export async function getWorkingEmployee() {
  try {
    const result = await Axios.get(baseurl.GetUrl() + "/working_employees");

    return result.data;
  } catch (error) {
    alert(error.message);
    alert(error.response.data.message);
  }
}

export async function submitWorkingEmployee(obj) {
  try {
    const result = await Axios.post(
      baseurl.GetUrl() + "/working_employees",
      obj
    );

    return result.data;
  } catch (error) {
    alert(error.message);
    alert(error.response.data.message);
  }
}

export async function EmployeeuploadImages(empimg, callback) {
  try {
    const result = await Axios.post(
      baseurl.GetUrl() + "/working_employees_images",
      empimg
    );
    return result.data;
  } catch (error) {
    alert(error.message);
    alert(error.response.data.message);
  }
}

export async function getWorkingEmployeeById(id) {
  try {
    const result = await Axios.get(
      baseurl.GetUrl() + `/working_employees/${id}`
    );
    return result.data;
  } catch (error) {
    alert(error.response.data.message);
  }
}

import Axios from "axios";
// import { async } from "./agentRoute";
const baseurl = require("./generalUrl");
const ls = require("local-storage");

export async function agentSignup(values) {
  try {
    const result = await Axios.post(
      baseurl.GetUrl() + "/agent/get-started",
      values
    );
    ls.set("agent_id", result.data.agent_id);
    return result;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return error;
    }
    alert(error.message);
  }
}

// export function agentSignup(values, callback) {
//   Axios.post(baseurl.GetUrl() + "/agent/get-started", values)
//     .then(async (response) => {
//       console.log(response);

//       if (response.data) {
//         await ls.set("agent_id", response.data.agent_id);
//         return callback(null, response);
//       }
//     })
//     .catch((error) => {
//       if (error.response.data) {
//         alert(error.response.data.message);
//         return callback(error);
//       }
//       alert(error.message);
//     });
// }

export function otpVarify(values, callback) {
  Axios.post(baseurl.GetUrl() + "/agent/verifyOtp", values)
    .then(async (response) => {
      if (response.data) {
        return callback(null, response);
      }
    })
    .catch((error) => {
      if (error.response.data) {
        alert(error.response.data.message);
        return callback(error);
      }
      alert(error.message);
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
      if (error.response.data) {
        alert(error.response.data.message);
        return callback(error);
      }
      alert(error.message);
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
      if (error.response.data) {
        alert(error.response.data.message);
        return callback(error);
      }
      alert(error.message);
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
      if (error.response.data) {
        alert(error.response.data.message);
        return callback(error);
      }
      alert(error.message);
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
      if (error.response.data) {
        alert(error.response.data.message);
        return callback(error);
      }
      alert(error.message);
    });
}

export async function allAgents() {
  try {
    const agents = await Axios.get(baseurl.GetUrl() + "/agent");
    return agents.data.data;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export async function agentAllReferrals(pageNumber) {
  try {
    const referrals = await Axios.get(
      baseurl.GetUrl() + "/agent/students/allstudents",
      {
        params: {
          pageNumber,
          pageLength: 10,
        },
      }
    );

    return referrals.data;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export function agentReferrals(callback) {
  Axios.get(baseurl.GetUrl() + "/agent/referrals/" + ls.get("id"))
    .then(async (response) => {
      if (response.data) {
        return callback(null, response.data.data);
      }
    })
    .catch((error) => {
      if (error.response.data) {
        alert(error.response.data.message);
        return callback(error);
      }
      alert(error.message);
    });
}

export async function updateReferralStatus(status, id) {
  try {
    const res = await Axios.put(
      baseurl.GetUrl() + `/agent/referrals/status/${id}`,
      status
    );
    return res.data;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export async function getAgent(id) {
  try {
    const agent = await Axios.get(baseurl.GetUrl() + `/agent/${id}`);
    return agent.data.data;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}
export async function getStudentByAgent(id) {
  try {
    const students = await Axios.get(
      baseurl.GetUrl() + `/agent/referrals/${id}`
    );
    return students.data.data;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export async function getStudentBill(bill) {
  try {
    const students = await Axios.get(baseurl.GetUrl() + "/student_billings");

    return students.data.data;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
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
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
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
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
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
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
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
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export async function getEmployee(obj = null) {
  try {
    const result = await Axios.get(
      baseurl.GetUrl() + "/employee_registeration",
      obj && { params: { obj } }
    );

    return result.data;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export async function updateEmployeeStatus(status, id) {
  try {
    await Axios.put(
      baseurl.GetUrl() + `/employee_registeration/update/${id}`,
      status
    );
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export async function getInternship(obj = null) {
  try {
    const result = await Axios.get(
      baseurl.GetUrl() + "/student_internship",
      obj && { params: { obj } }
    );

    return result.data;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
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
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export async function updateIntersStatus(status, id) {
  try {
    await Axios.put(
      baseurl.GetUrl() + `/student_internship/update/${id}`,
      status
    );
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export async function getEnquiry(obj = null) {
  try {
    const result = await Axios.get(
      baseurl.GetUrl() + "/student_enquiry",
      obj && { params: { obj } }
    );

    return result.data;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export async function submitEnquiry(obj) {
  try {
    const result = await Axios.post(baseurl.GetUrl() + "/student_enquiry", obj);
    return result.data;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export async function updateStudentEnquiryStatus(status, id) {
  try {
    await Axios.put(baseurl.GetUrl() + `/student_enquiry/status/${id}`, status);
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export async function getSyllabus() {
  try {
    const result = await Axios.get(baseurl.GetUrl() + "/student_syllabus");
    console.log(result);

    return result.data;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
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
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export async function getCollaborators(obj = null) {
  try {
    const result = await Axios.get(
      baseurl.GetUrl() + "/collaborators",
      obj && { params: { obj } }
    );

    return result.data;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export async function submitCollaborators(obj) {
  try {
    const result = await Axios.post(baseurl.GetUrl() + "/collaborators", obj);
    return result.data;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export async function updateCorporateStatus(status, id) {
  try {
    await Axios.put(baseurl.GetUrl() + `/collaborators/update/${id}`, status);
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export async function getWorkingEmployee() {
  try {
    const result = await Axios.get(baseurl.GetUrl() + "/working_employees");

    return result.data;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
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
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
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
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

export async function getWorkingEmployeeById(id) {
  try {
    const result = await Axios.get(
      baseurl.GetUrl() + `/working_employees/${id}`
    );
    return result.data;
  } catch (error) {
    if (error.response.data) {
      alert(error.response.data.message);
      return;
    }
    alert(error.message);
  }
}

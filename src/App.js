import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./store.js";
import { Provider } from "react-redux";

import ProtectedRouter from "./protectedRouter.js";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Chat from "./pages/chat/Chat";
import TopPics from "./pages/TopPics/TopPics";
import FindFriends from "./pages/FindFriends/FindFriends";
import Earnings from "./pages/Earnings/Earnings";
import Chatbot from "./pages/Chatbot/Chatbot";
import Profile from "./pages/Profile/Profile";
import Wallet from "./pages/Wallet/Wallet";
import SignUpVerification from "./pages/SignUpVerification/SignUpVerification.jsx";
import EmployeeVerification from "./frontpage/EmployeeVerification/EmployeeVerification.jsx";
import MainDashboard from "./frontpage/MainDashBoard/MainDashboard.jsx";
import { AgentNavbar } from "./frontpage/AgentNavbar/AgentNavbar.jsx";
import AdminDashboard from "./frontpage/MainDashBoard/AdminDashboard/AdminDashboard.jsx";
import HumanResource from "./frontpage/MainDashBoard/HumanResource/HumanResource.jsx";
import HrCareer from "./frontpage/MainDashBoard/HumanResource/HrCareer.jsx";
import HrMeeting from "./frontpage/MainDashBoard/HumanResource/HrMeeting.jsx";
import HrCorporate from "./frontpage/MainDashBoard/HumanResource/HrCorporate.jsx";
import QuickData from "./frontpage/MainDashBoard/Marketing/QuickData.jsx";
import AgentStudents from "./frontpage/MainDashBoard/Marketing/AgentStudents.jsx";
import InternspDetails from "./frontpage/MainDashBoard/Marketing/internsDetails.jsx";

import MarketingNavbar from "./frontpage/MainDashBoard/Marketing/MarketingNavbar.jsx";
import ItResource from "./frontpage/MainDashBoard/ItResource/ItResource.jsx";
import InternNavbar from "./frontpage/MainDashBoard/Intern/InternNavbar.jsx";
import InternMeeting from "./frontpage/MainDashBoard/Intern/InternMeeting.jsx";
import ItMeeting from "./frontpage/MainDashBoard/ItResource/ItMeeting.jsx";
import MarketingMeeting from "./frontpage/MainDashBoard/Marketing/MarketingMeeting.jsx";

import AboutUs from "./pages/AboutUs/AboutUs/AboutUs";

import Doc from "./pages/Doc/Doc";
import Disclaimer from "./pages/AboutUs/Disclaimer/Disclaimer.jsx";
import AboutUsIndex from "./pages/AboutUs";
import PrivacyPolicy from "./pages/AboutUs/PrivacyPolicy/PrivacyPolicy.jsx";
import TermsOfServices from "./pages/AboutUs/TermsOfServices/TermsOfServices.jsx";
import WhitePaper from "./pages/AboutUs/WhitePaper/WhitePaper.jsx";
import ContactUs from "./pages/AboutUs/ContactUs/ContactUs";

import { EduMetrixHomepage } from "./frontpage/Homepage/Homepage.jsx";
import { TermOfservices } from "./frontpage/TermOfCondition/TermOfservices.jsx";
import { SubscriptionTerms } from "./frontpage/TermOfCondition/SubscriptionTerms.jsx";
import { PricingPaymentsAndRefunds } from "./frontpage/TermOfCondition/PricingPaymentsAndRefunds.jsx";


import { Privacypolicy } from "./frontpage/Privacypolicy/PrivacyPolicy.jsx";
import { WhitePaperPage } from "./frontpage/WhitePaper/WhitePaperPage.jsx";
import { Address } from "./frontpage/Address/Address.jsx";
import ScrollToTop from "./ScrollTotop.js";
import { Frontend } from "./frontpage/SingleCoursePage/Frontend.jsx";
import { Backend } from "./frontpage/SingleCoursePage/Backend.jsx";
import { Fullstack } from "./frontpage/SingleCoursePage/Fullstack.jsx";
import { Hrform } from "./frontpage/HrForm/HrForm.jsx";
import { Aboutus } from "./frontpage/Aboutus/AboutUs.jsx";
// <<<<<<< HEAD
import { EmployeLogin } from "./frontpage/EmployeeLogin/EmployeLogin.jsx";
import { AgentsSignup } from "./frontpage/AgentsSignup/AgentsSignup.jsx";
import { AgentsLogin } from "./frontpage/AgentsLogin/AgentsLogin.jsx";
import { AgentsDashboard } from "./frontpage/AgentsDashboard/AgentsDashboard.jsx";
import AgentEarning from "./frontpage/AgentEarning/AgentEarning.jsx";
import { InternshipData } from "./frontpage/InternshipData/InternshipData.jsx";
import { CareerData } from "./frontpage/CareerData/CareerData.jsx";
import { Status } from "./frontpage/Status/Status.jsx";
import { StudentDetails } from "./frontpage/StudentDetails/StudentDetails.jsx";
import { Internship } from "./frontpage/Internship/Internship.jsx";
import { Navbarpage } from "./frontpage/Navbar/Navbarpage.jsx";
import { WebsiteDashboard } from "./WebsiteDashboard/WebsiteDashboard.jsx";
import { BillingInformationPage } from "./BillingDetails/BillingInformationPage.jsx";
import { StudentStatusShow } from "./WebsiteDashboard/StudentStatus/StudentStatusShow.jsx";
import { AgentVarification } from "./frontpage/AgentVerification/AgentVarification.jsx";
import { ForgetagntPasswod } from "./frontpage/ForgetPasword/ForgetagntPasswod.jsx";
import { ForgetAgentOtpVarify } from "./frontpage/ForgetAgentOtpVarify/ForgetAgentOtpVarify.jsx";
import { ForgetAgentPasswordUpdate } from "./frontpage/ForgetAgentPasswordUpdate/ForgetAgentPasswordUpdate.jsx";
// import AdminDashboard from "./frontpage/MainDashBoard/AdminDashboard/AdminDashboard.jsx";
import EmployeeDetails from "./frontpage/MainDashBoard/AdminDashboard/EmployeeDetails.jsx";
import EmployeeProfiles from "./frontpage/MainDashBoard/AdminDashboard/EmployeeProfiles.jsx";
import BillingHistory from "./frontpage/MainDashBoard/AdminDashboard/BillingHistory.jsx";
import NewBillingDetails from "./frontpage/MainDashBoard/AdminDashboard/NewBillingDetails.jsx";
import AdminMeeting from "./frontpage/MainDashBoard/AdminDashboard/AdminMeeting.jsx";
import EmtTracker from "./frontpage/MainDashBoard/AdminDashboard/EmtTracker.jsx";
import EmtForm from "./frontpage/MainDashBoard/Marketing/EmtForm.jsx";
// =======
// >>>>>>> d8fa9f140c596cfebe9aad8864b64ed3cc4aee98

function App() {
  return (
    <div className="platform">
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route index element={<ProtectedRouter children={<Home />} />} />
            <Route
              path="login"
              element={<ProtectedRouter children={<Login />} />}
            />
            <Route
              path="chat"
              element={<ProtectedRouter children={<Chat />} />}
            />
            <Route
              path="pics"
              element={<ProtectedRouter children={<TopPics />} />}
            />
            <Route
              path="find_friends"
              element={<ProtectedRouter children={<FindFriends />} />}
            />
            <Route
              path="earnings"
              element={<ProtectedRouter children={<Earnings />} />}
            />
            <Route
              path="chatbot"
              element={<ProtectedRouter children={<Chatbot />} />}
            />
            <Route
              path="profile"
              element={<ProtectedRouter children={<Profile />} />}
            />
            <Route
              path="wallet"
              element={<ProtectedRouter children={<Wallet />} />}
            />
            <Route
              path="sign_up_user_authentication"
              element={<SignUpVerification />}
            />
            <Route path="About_us" element={<AboutUsIndex />}>
              <Route index element={<AboutUs />} />
              <Route path="disclaimer" element={<Disclaimer />} />
              <Route path="privacy_policy" element={<PrivacyPolicy />} />
              <Route path="terms_of_services" element={<TermsOfServices />} />
              <Route path="white_paper" element={<WhitePaper />} />
              <Route path="contact_us" element={<ContactUs />} />
            </Route>
            {/* <Route path='*' element={<ErrorPage />} /> */}

            <Route path="/documentation" element={<Doc />} />

            {/* Edumetrix Front Courses Page */}

            <Route path="/homepage" element={<EduMetrixHomepage />}></Route>
            <Route path="/Courses" element={<Fullstack />}></Route>
            <Route path="/AboutUs" element={<Aboutus />}></Route>
            <Route path="/TermOfservices" element={<TermOfservices />}></Route>
            <Route path="/SubscriptionTerms" element={<SubscriptionTerms />}></Route>
            <Route path="/PricingPaymentsAndRefunds" element={<PricingPaymentsAndRefunds />}></Route>

            
            <Route path="/PrivacyPolicy" element={<Privacypolicy />}></Route>
            <Route path="/whitepaper" element={<WhitePaperPage />}></Route>
            <Route path="/address" element={<Address />}></Route>
            <Route path="/backend" element={<Backend />}></Route>
            <Route path="/frontend" element={<Frontend />}></Route>
            <Route path="/fullstack" element={<Fullstack />}></Route>
            <Route path="/Hrform" element={<Hrform />}></Route>
            <Route path="/employelogin" element={<EmployeLogin />}></Route>
            <Route path="/agentssignup" element={<AgentsSignup />}></Route>
            <Route path="/agentslogin" element={<AgentsLogin />}></Route>
            <Route
              path="/employeeVerification"
              element={<EmployeeVerification />}
            ></Route>
            <Route path="/maindashboard" element={<MainDashboard />}></Route>
            {/* <Route path="/admindashboard" element={<AdminDashboard />}></Route> */}
            <Route path="/emttracker" element={<EmtTracker />}></Route>
            <Route
              path="/employeedetails"
              element={<EmployeeDetails />}
            ></Route>
            <Route
              path="/employeeprofiles"
              element={<EmployeeProfiles />}
            ></Route>
            <Route path="/BillingHistory" element={<BillingHistory />}></Route>
            <Route
              path="/newbilingdetails"
              element={<NewBillingDetails />}
            ></Route>
            <Route path="/adminmeeting" element={<AdminMeeting />}></Route>
            {/* <Route path="/humanresource" element={<HumanResource />}></Route> */}
            <Route path="/hrcareer" element={<HrCareer />}></Route>
            <Route path="/hrcorporate" element={<HrCorporate />}></Route>
            <Route path="/hrmeeting" element={<HrMeeting />}></Route>
            <Route path="/quickdata" element={<QuickData />}></Route>
            <Route path="/agentstudents" element={<AgentStudents />}></Route>
            <Route path="/emtform" element={<EmtForm />}></Route>

            <Route path="/internsdetails" element={<InternspDetails />}></Route>

            {/* <Route
              path="/marketingnavbar"
              element={<MarketingNavbar />}
            ></Route> */}

            <Route
              path="/marketingmeeting"
              element={<MarketingMeeting />}
            ></Route>

            <Route path="/itresource" element={<ItResource />}></Route>
            <Route path="/itmeeting" element={<ItMeeting />}></Route>

            <Route path="/internnavbar" element={<InternNavbar />}></Route>
            <Route path="/internmeeting" element={<InternMeeting />}></Route>

            <Route
              path="/agents-dashboard"
              element={<AgentsDashboard />}
            ></Route>
            <Route path="/internship-data" element={<InternshipData />}></Route>
            <Route path="/career-data" element={<CareerData />}></Route>
            <Route path="/status" element={<Status />}></Route>
            <Route path="/student-details" element={<StudentDetails />}></Route>
            <Route path="/agent-earning" element={<AgentEarning />}></Route>
            <Route path="/te-dashboard" element={<WebsiteDashboard />}></Route>
            {/* <Route
              path="/billing-information"
              element={<BillingInformationPage />}
            ></Route> */}
            <Route
              path="/agent-card/:id"
              element={<StudentStatusShow />}
            ></Route>
            <Route
              path="/agent_otp_varification"
              element={<AgentVarification />}
            ></Route>
            <Route
              path="/forget_agent_password"
              element={<ForgetagntPasswod />}
            ></Route>
            <Route
              path="/forget_agent_otp_varify"
              element={<ForgetAgentOtpVarify />}
            ></Route>
            <Route
              path="/forget_agent_password_update"
              element={<ForgetAgentPasswordUpdate />}
            ></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

//

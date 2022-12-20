import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "react-chatbot-kit/build/main.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { InternshipProvider } from "./context/InternshipContext";
import { CareerProvider } from "./context/careerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <InternshipProvider>
    <CareerProvider>
      <App />
    </CareerProvider>
  </InternshipProvider>
  // {/* </React.StrictMode> */}
);

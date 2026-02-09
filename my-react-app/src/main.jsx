import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthProvider from "./Context/AuthContext";
import "./lookGood.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import * as bootstrap from 'bootstrap';


import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
   {/* <div  className="container-fluid" >Hello World</div> */}
    </AuthProvider>
  </StrictMode>
);

//the AuthProvider is placed at the highest most part of the
//application.....


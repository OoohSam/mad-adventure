import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useAuth } from "./Context/AuthContext";

import AuthProvider from "./Context/AuthContext";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);

//the AuthProvider is placed at the highest most part of the
//application.....

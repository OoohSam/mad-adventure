import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/layout/MainLayout";
import { useContext, StrictMode } from "react";
import AuthProvider from "./Context/AuthContext";
import { useAuth } from "./Context/AuthContext";

//Routes...Routes....Routes...routes
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Task from "./Pages/Task";
import Habits from "./Pages/Habits";
import Settings from "./pages/Settings";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Public*/}
        <Route path="/login" element={<Login />} />

        {/*Protected*/}
        <Route element={<ProtectedRoute>  <MainLayout /> </ProtectedRoute>  }  >
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/Tasks" element={<Task/>}/>
          <Route path="/Habits" element={<Habits/>}/>
          <Route path="/Settings" element={<Settings/>}/>


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

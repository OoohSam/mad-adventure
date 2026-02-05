import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import Login from "./Pages/Login";
import { Children } from "react";


//This is the code inside the Protected Route

export default function ProtectedRoute({children}){
    const{user} = useAuth()

    if(!user){
        return <Navigate to={<Login/>} replace/>
    }
    return children
}


//The above is the code inside the ProtectedRoute

//Now this is the code inside the App.jsx
import ProtectedRoute from "./Components/ProtectedRoute";

import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Habits from "./Pages/Habits";

export default function App(){

    return(
        <BrowserRouter>

        <Routes>
        <Route path="./Pages/Login" element={<Login/>}/>
            <Route  element={ <ProtectedRoute>  <MainLayout/>  </ProtectedRoute>  } >
                <Route path="./Pages/Dashboard" element={<Dashboard/>} />
                <Route path="./Pages/Habits" element={<Habits/>} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

//inside the MainLayout

import { NavLink,Outlet } from "react-router-dom";

export default function MainLayout(){
    return(

        <>
        <nav>
            <NavLink  to={<Dashboard/>} ></NavLink>
        </nav>

        <><Outlet/></>
        </>
    )
}
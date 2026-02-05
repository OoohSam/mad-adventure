import React from "react";
import {NavLink, Outlet} from "react-router-dom"
import { useAuth } from "../../Context/AuthContext";
import Dashboard from "../../Pages/Dashboard";

export default function MainLayout(){
    const {logout}= useAuth()

    return(
        <>
       <nav>
        <NavLink to={<Dashboard/>}>Dashboard</NavLink>
        <NavLink to={<Task/>}  >  Tasks</NavLink>
        <NavLink to={<Habits/>} >Habits</NavLink>
        <NavLink  to={<Settings/>}   >    Settings</NavLink>
        <button>{logout}</button>
       </nav>

        <main>
            <Outlet/>
        </main>

        </>
    )
}

//The above navigation links when Clicked will update the URL
//IF the url is updated to Habits then React Router will fetch the 
//Habits component and render it but first looking at the authentication
//State.
//Take for example.
//This is what i call protected routing.
//
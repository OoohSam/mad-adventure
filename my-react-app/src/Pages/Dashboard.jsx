import React from "react";
import { useAuth } from "../Context/AuthContext";

export default function Dashboard(){
    const{user,logout} = useAuth()
    console.log("Hello World")
    return(
        <>
        <h1>Welcome, {user.name} </h1>
        <button onClick={logout}  >Logout</button>
        </>
    )
}
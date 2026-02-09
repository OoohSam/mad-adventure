import React from "react";
import { useAuth } from "../Context/AuthContext";

export default function Settings(){
    const{user,logout} = useAuth()
    return (
    <div className="dashboard-page">
     
        <h1 className="dashboard-title">Settings</h1>
        
       
    
    </div>
  
  );
}
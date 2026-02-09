import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

//We have imported the Global context using the useAuth

export default function Login() {
  const [username, setUsername] = useState("");
  //Bellow i am using the global contexts in the useAuth
  const { user, login } = useAuth();

  if(user){
    return <Navigate to={"/dashboard"} replace/>
  }

  function handleSubmit(e) {
    console.log("Submissio" )
    e.preventDefault();
    if (username.trim()) {
      
      return login(username);
    }
  
  }

  return (
 <div className="login-page">
  <form className="login-form" onSubmit={handleSubmit}>
    <input
      className="login-input"
      type="text"
      placeholder="Enter your name here"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />

    <button className="login-btn" type="submit">
      Login
    </button>
  </form>
</div>

  );
}

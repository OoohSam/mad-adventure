import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export default function AuthProvider({children}) {
  //set State
  const [user,setUser] = useState(null)

  //so here we define a useEffect that will run after the app has
  //displayed the UI...What it will do is check whether the user is
  // logged in or Not

  useEffect(()=>{
    let savedUser = localStorage.getItem("user")
    if(savedUser){
        setUser(JSON.parse(savedUser))
        console.log(
            "Ther is a User in the data base"
        )
    }
  },[])

  function login(username){
    console.log("User is Logged In")
    const userData = {name:username}
    setUser(userData)
    localStorage.setItem("user",JSON.stringify(userData))
  }

  function logout(){
    setUser(null)
    localStorage.removeItem("user")  
    console.log("Logout pressed")
  }

 return(
   <AuthContext.Provider value={{login,logout,user,setUser}} >
     {children}
   
   </AuthContext.Provider>  
 )

}

export function useAuth(){
    return useContext(AuthContext)
}



import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LogInContext = createContext()

export default function LogInProvider({ children }) {
    const localUser = JSON.parse(localStorage.getItem("user"))
    const [localToken, setLocalToken] = useState(localUser !== null ? localUser : {})
    const navigate = useNavigate()

    useEffect(() => {
        if(localUser === null){
            navigate("/")
        }
        else{
          //  navigate("/home")
        }
    }, [])

    return (
        <LogInContext.Provider value={{localToken, setLocalToken}}>
            {children}
        </LogInContext.Provider>
    )
}
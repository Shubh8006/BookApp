import React, { createContext, useContext } from 'react'
import { useState } from 'react'

export const AuthContext = createContext()
export default function Authprovider({children}) {
 const initialAuthUser = localStorage.getItem("Users")
const [authuser, setAuthUser] = useState(
    initialAuthUser? JSON.parse(initialAuthUser) : undefined
)
return(
    <AuthContext.Provider value ={[authuser, setAuthUser]}>
        {children}
    </AuthContext.Provider>
)

}
export const useAuth =()=>useContext(AuthContext);

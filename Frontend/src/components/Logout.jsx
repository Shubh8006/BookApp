import React from 'react'
import { useAuth } from '../context/Authprovider'
import toast from 'react-hot-toast'

export default function Logout() {
    const[authuser, setAuthUser]= useAuth()
    const handleLogout =()=>{
        try {
           setAuthUser({
            ...authuser,
            user:null
           })
           localStorage.removeItem("Users")
           toast.success("Logout Succesfull")
           window.location.reload();
        } catch (error) {
            toast.error("Error:" + error.message);
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-600 text-white rounded-md cursor-pointer '
      onClick={handleLogout}
      >Logout</button>
    </div>
  )
}

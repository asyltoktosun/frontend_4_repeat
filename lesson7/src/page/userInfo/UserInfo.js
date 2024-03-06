import React, { useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import classes from "./UserInfo.module.css"
import { useState } from "react";



const UserInfo=()=>{
    const {id}=useParams()

    const [user, setUser]=useState({})
    
    const getUser=async()=>{
        const URL=`https://jsonplaceholder.org/users/${id}`
        const data=await fetch(URL)
        const users=await (data.json())
        setUser(users)
    }
    useEffect(()=>{getUser()},[])
    return(
       <div>
            <p>{user.firstname}</p>
            <p>{user.lastname}</p>
            <p>{user?.address?.city}</p>

       </div>
    )
}
    
export default UserInfo;
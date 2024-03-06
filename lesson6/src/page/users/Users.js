import React, { useState } from "react";
import classes from "./Users.module.css";


const Users = ({users}) => {
  const [user, setUser]=useState({})
    
  const getUser=async(id)=>{
    const URL=`https://jsonplaceholder.org/users/${id}`
    const data=await fetch(URL)
    const user=await(data.json())
    setUser(user)
  }
  return (
    <ul className={classes.users}>
      {
        users.map(user=>
        <li key={user.id} className={classes.user }>
          <p>Username: {user.login.username}</p>
          <p>BirthDate: {user.birthDate}</p>
          <button onClick={()=>getUser(user.id)}>more</button>
        </li>)
      }
    </ul>
  )

};

export default Users;

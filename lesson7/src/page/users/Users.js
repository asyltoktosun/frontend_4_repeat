import React, { useState } from "react";
import classes from "./Users.module.css";
import { Link } from "react-router-dom";


const Users = () => {
  const [users, setUsers]=useState([])
    
  const getUser=async()=>{
    const URL=`https://jsonplaceholder.org/users`
    const data=await fetch(URL)
    const users=await (data.json())
    setUsers(users)
  }
  return (
    <>
    <button onClick={getUser}>Get Users</button>
    <ul className={classes.users}>
      {
        users.map(user=>
        <li key={user.id} className={classes.user }>
          <p>Username: {user.login.username}</p>
          <p>BirthDate: {user.birthDate}</p>
          <Link to={`/users/${user.id}`}> more </Link>
          {/* <button onClick={()=>getUser(user.id)}>more</button>q */}
        </li>)
      }
    </ul>
    </>
    
  )

};

export default Users;

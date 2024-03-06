import React, { useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { useState } from "react";



const FormPage=()=>{
    const [inputValue, setInputValue]=useState({
        user: '',
        age: 0
    })

    const changeInput=(event)=>{
        setInputValue({...inputValue, [event.target.name]: event.target.value})
    }

    return(
       <div>
            <input 
                name="user"
                type="text"
                placeholder="user"
                onChange={changeInput}/>
            <input 
                name="age"
                type="number"
                placeholder="age"
                onChange={changeInput}/>
       </div>
    )
}
    
export default FormPage;
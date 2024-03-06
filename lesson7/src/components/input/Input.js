import React from "react";
import classes from "./Input.module.css"



const Input=({placeholder,onChange, value, input})=>{
    return(
        <input 
        placeholder={placeholder} 
        type="text"
        onChange={onChange}
        value={value}
        input={input}
        // className={classes.input}
        />
        
    )

}

export default Input;
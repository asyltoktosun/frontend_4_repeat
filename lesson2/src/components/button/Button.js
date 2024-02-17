import React from "react";
import classes from './Button.module.css';

export const Button=({text})=>{
    return(
        <>
            <button className={classes.textAgua}>{text}</button>
        </>
    )
}


export default Button;
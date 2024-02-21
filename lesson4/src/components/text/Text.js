
import React from "react";
import classes from './Text.module.css'


const Text=({children})=>{
    return(

        <div className={classes.textViolet}>   
            {children}

        </div>
        
    )

}

export default Text;
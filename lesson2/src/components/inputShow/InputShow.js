import React from "react";
import classes from './InputShow.module.css'



const InputShow=({input})=>{
    const color=()=>{
        if(input.length>5){
            return 'green'
        }else return 'red'
    }

    const person={
        name:'Asyl',
        age:19
    }
    person.name
    
    return(
        <div className={classes[color()]}>
            {input}
        </div>
        
    )

}

export default InputShow;
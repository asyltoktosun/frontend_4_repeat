import React, { useState } from "react";
import classes from "./ToDo.module.css";
import Button from "../button/Button";

const ToDo = ({ task, handleDelete, handleDone,handleCurrentEdit, isEdit ,handleEdit}) => {
  const [input, setInput]=useState(task.title)
  if(isEdit){
    return <div>
      <input 
        type="text"
        value={input}
        onChange={event=>setInput(event.target.value)}/>
      <Button 
      text={'Save'} 
      onClick={()=>{
        handleEdit({
          ...task, title: input
        })
        handleCurrentEdit(null)
      }}/>
      <Button text={'Cancel'} onClick={()=>handleCurrentEdit(null)}/>
    </div>
  }

  return (
    <li className={`${classes.list} ${task.completed && classes.done}`}>
      <div className={classes.info}>
        <p>id:{task.id}</p>
        <p>title:{task.title}</p>
      </div>
      <div className={classes.btnBox}>
        <Button text={"Edit"} onClick={() => handleCurrentEdit(task.id)} />
        <Button text={"Done"} onClick={()=>handleDone(task.id)} />
        <Button text={"Delete"} onClick={() => handleDelete(task.id)} />
      </div>
      
    </li>
  );
};

export default ToDo;

import React, { useState } from "react";
import classes from "./ToDo.module.css";
import Button from "../button/Button";

const ToDo = ({ task, handleDelete, handleDone,handleCurrentEdit, isEdit }) => {
  const [input, setInput]=useState(task.title)
  if(isEdit){
    return <div>
      <input 
        type="text"
        value={input}
        onChange={event=>setInput(event.target.value)}/>
      <Button text={'Save'}/>
      <Button text={'Cancel'}/>
    </div>
  }

  return (
    <li className={classes.list}>
      <p>id:{task.id}</p>
      <p>title:{task.title}</p>
      <Button text={"Edit"} onClick={() => handleCurrentEdit(task.id)} />
      <Button text={"Done"} onClick={()=>handleDone(task.id)} />
      <Button text={"Delete"} onClick={() => handleDelete(task.id)} />
      
    </li>
  );
};

export default ToDo;

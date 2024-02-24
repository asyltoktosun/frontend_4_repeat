import React from "react";
import classes from "./ToDo.module.css";
import Button from "../button/Button";

const ToDo = ({ task, handleDelete, handleDone, handleEdit }) => {
  return (
    <li className={classes.list}>
      <p>id:{task.id}</p>
      <p>title:{task.title}</p>
      <Button text={'Delete'} onClick={() => handleDelete(task.id)} />
      <Button text={"Done"} onClick={()=>handleDone(task.id)}/>
      <Button text={"Edit"} onClick={()=>handleEdit(task.id)} />
    </li>
  );
};

export default ToDo;

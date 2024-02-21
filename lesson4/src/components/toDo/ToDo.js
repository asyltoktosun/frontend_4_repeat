import React from "react";
import classes from "./ToDo.module.css";
import Button from "../button/Button";

const ToDo = ({ task, handleDelete, handleDone }) => {
  return (
    <li className={classes.list}>
      <p>id:{task.id}</p>
      <p>title:{task.title}</p>
      <Button text={'delete'} onClick={() => handleDelete(task.id)} />
      <Button text={"Done"} onClick={handleDone} />
    </li>
  );
};

export default ToDo;

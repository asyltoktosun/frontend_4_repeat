import React from "react";
import classes from './ToDoList.module.css';

const ToDoList = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <li className={classes.task}>
      <p>id: {task.id}</p>
      <p>title: {task.title}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ToDoList;
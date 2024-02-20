import React from "react";
import classes from './ToDoList.module.css';
import ToDo from "../toDo/ToDo";

const ToDoList = ({ tasks, handleDelete }) => {
  // const handleDelete = () => {
  //   onDelete(task.id);
  // };

  return (
    <ul className={classes.task}>
      {tasks.map(todo=> <ToDo key={todo.id} task={todo} handleDelete={handleDelete}/>)}
    </ul>
  );
};

export default ToDoList;
import React, { useState } from "react";
import classes from './ToDoList.module.css';
import ToDo from "../toDo/ToDo";

const ToDoList = ({ tasks, handleDelete,handleDone, handleEdit }) => {
  const [currentEdit,setCurrentEdit]=useState()

  return (
    <ul className={classes.task}>
      {tasks.map(todo=> 
      <ToDo 
        key={todo.id} 
        task={todo} 
        handleDelete={handleDelete} 
        handleDone={handleDone}
        handleEdit={handleEdit}
        handleCurrentEdit={setCurrentEdit}
        isEdit={currentEdit===todo.id}/>)}
    </ul>
  );
};

export default ToDoList;
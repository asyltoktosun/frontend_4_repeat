import React from "react";
import classes from './List.module.css'





const List = ({ tasks }) => {
  return (
    <ul className={classes.wrapper}>
      {tasks.map(task => (
        <li key={task.id} className={task.completed? classes.green: classes.red}>
          {task.title} - {task.completed ? 'Completed' : 'Not Completed'}
        </li>
      ))}
    </ul>
  );
};


export default List;
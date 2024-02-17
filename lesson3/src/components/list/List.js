import React from "react";
import ToDoList from "../toDoList/ToDoList";

const List = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <ToDoList key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default List;
import React, { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import ToDoList from './components/toDoList/ToDoList';
import Modal from './components/modal/Modal';
import Input from './components/input/Input';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'coding',
      completed: true
    },
    {
      id: 2,
      title: 'eat',
      completed: false
    },
    {
      id: 3,
      title: 'sleep',
      completed: false
    },
    {
      id: 4,
      title: 'reading',
      completed:true
    }
  ]);

  const [originalTasks, setOriginalTasks] = useState(tasks);

  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState('');
  const [editTask, setEditTask] = useState(null);

  const handleShowModal = () => {
    setShowModal(!showModal);
    setEditTask(null); 
    setInput(''); 
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddTask = () => {
    if (input.trim() !== '') {
      setTasks(prevTasks => [
        ...prevTasks,
        {
          id: tasks.length + 1,
          title: input,
          completed: false
        }
      ]);
      setInput('');
      setShowModal(false);
    }
  };

  const handleEditTask = (id, newTitle) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);
    setEditTask(null);
    setShowModal(false); 
  };

  const handleCancelEdit = () => {
    setEditTask(null);
    setShowModal(false); 
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleDone = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setInput(task.title); 
    setShowModal(true); 
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    if (inputValue === '') {
      // Возвращаем исходные задачи при пустом поиске
      setTasks(originalTasks);
    } else {
      // Фильтруем задачи по введенному тексту
      const filteredTasks = tasks.filter(task =>
        task.title && task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTasks(filteredTasks);
    }
  };

  return (
    <>
      {showModal && (
        <Modal handleShow={handleShowModal}>
          <Input
            placeholder="Edit task"
            value={input}
            onChange={handleInputChange}
          />
          <Button onClick={() => editTask ? handleEditTask(editTask.id, input) : handleAddTask()} text="Save" />
          <Button onClick={handleCancelEdit} text="Cancel" />
        </Modal>
      )}
      <button onClick={handleShowModal}>Add Task</button>
      <div>
        <h1>To Do List</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <ToDoList
        tasks={tasks}
        handleDelete={handleDelete}
        handleDone={handleDone}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;

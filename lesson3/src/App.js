import './App.css';
import Button from './components/button/Button';
import User from './components/user/User';
import  Example  from './components/example/Example';
import Header from './components/header/Header';
import Text from './components/text/Text'
import Modal from './components/modal/Modal';
import { useState } from 'react';
import CountPage from './page/countPage/CountPage';
import Input from './components/input/Input';
import InputShow from './components/inputShow/InputShow';
import ToDo from './components/toDo/ToDo';
import ToDoList from './components/toDoList/ToDoList';


function App() {

  //navbar

  const navbar=['HOME','ABOUT US','CONTACTS']

  const [show,setShow]=useState(false)

  //INPUT
  const[input, setInput]=useState('')

  const onChangeInput=(event)=>{
    setInput(event.target.value)

  }

  const handleShow=()=>{
    setShow(!show)
  }

  //tasks

  const [tasks, setTasks]=useState([
    {
      id:1 , 
      title: 'coding',
      completed: true
    },
    {
      id:2,
      title: 'eat',
      completed: false
    },
    {
      id:3,
      title: 'sleep',
      completed: false
    },
    {
      id:4,
      title: 'reading',
      completed:true
    }
  ])
  
  const handleAdd=()=>{
    setTasks(prev=>[...prev,
      {
        id: tasks.length+1,
        title: input,
        completed: false
      }
    ] ) }

    const handleDelete=(taskId)=>{
      const updatedTasks=tasks.filter(task=>task.id !== taskId);
      setTasks(updatedTasks)

    }


  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter(task =>
    task.title && task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    {/* ----MODAL---- */}
      {
        show && <Modal handleShow={handleShow}>
          <Input 
          placeholder={"Add task"}
          onChangeInput={onChangeInput}/>    
          <Button onClick={handleAdd} text={"Add"}/> </Modal>
        
      }
      <button onClick={handleShow}>click</button>

      {/* <CountPage/>
      <InputShow input={input}/>
      <Input placeholder={'type something'} onChangeInput={onChangeInput}/> */}

      <div> 
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}/>
    </div>
    <ToDoList tasks={filteredTasks} handleDelete={handleDelete}/>
    </>
  );
}

export default App;

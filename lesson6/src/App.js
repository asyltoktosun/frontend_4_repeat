import './App.css';
import Button from './components/button/Button';
import User from './components/user/User';
import  Example  from './components/example/Example';
import Header from './components/header/Header';
import Text from './components/text/Text'
import Modal from './components/modal/Modal';
import { useEffect, useState } from 'react';
import CountPage from './page/countPage/CountPage';
import Input from './components/input/Input';
import InputShow from './components/inputShow/InputShow';
import ToDo from './components/toDo/ToDo';
import ToDoList from './components/toDoList/ToDoList';


function App() {

  //navbar

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
  
  const[originalTasks]=useState([...tasks])

  const handleAdd=()=>{
    setTasks(prev=>[...prev,
      {
        id: tasks.length+1,
        title: input,
        completed: false
      }
    ] ) }

  const handleDone = (id) => {
    console.log(id)
    tasks.map(task=> {
        if(task.id===id) {
            return task.completed = !task.completed
        }
        return tasks
    })
    setTasks([...tasks])
  }

   

  const handleDelete=(taskId)=>{
    const updatedTasks=tasks.filter(task=>task.id !== taskId);
    setTasks(updatedTasks)

  }

  const handleEdit=(editTodo)=>{
    console.log(editTodo)

  }

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const inputValue=event.target.value
    setSearchTerm(inputValue);
    if(inputValue===''){
      setTasks(originalTasks)
    }
    else{
      const filteredTasks = originalTasks.filter(task =>
      task.title && task.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setTasks(filteredTasks)

    }  
  };

//   useEffect(()=>{
//     console.log('useEffect')
//   })
   


  return (
    <>
    {/* ----MODAL---- */}
      {
        show && 
        <Modal handleShow={handleShow}>
          <Input 
            placeholder={"Add task"}
            onChange={onChangeInput}
            value={input}
            />    
          <Button onClick={handleAdd} text={"Add"}/>
           </Modal>
          
        
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
    <ToDoList 
      tasks={tasks} 
      handleDelete={handleDelete} 
      handleDone={handleDone}
      handleEdit={handleEdit}/>
    </>
  );
}

export default App;

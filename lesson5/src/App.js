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
import Users from './page/users/Users';


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

  const [tasks, setTasks]=useState([])
  const[originalTasks]=useState([...tasks])

  const handleAdd = () => {
    console.log(input)
    setTasks(prev => [
        ...prev,
        {
            id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            title: input,
            completed: false
        }
    ]);
  };

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
    tasks.map(task => {
      if(task.id===editTodo.id){
        return task.title=editTodo.title
      }
      
    })
    setTasks(tasks)

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

  const handleClear = ()=>{
    localStorage.setItem('tasks', JSON.stringify([]))
    setTasks([])
    
  }



  useEffect(()=>{
    const myLocalList =JSON.parse(localStorage.getItem('tasks'))
    if(myLocalList===null){
      return localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    if(myLocalList.length !== 0){
      setTasks(myLocalList)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])
  
  const [users, setUsers]=useState([])

  const getUsers=async()=>{
    const URL='https://jsonplaceholder.org/users'
    const data=await fetch(URL)
    const users=await(data.json())
    setUsers(users)
  }


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
      <button onClick={handleShow}>Click</button>
      <button onClick={handleClear}>Clear</button>
      <button onClick={getUsers}>Get Users</button>
      
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
      handleEdit={handleEdit}
    />
    <Users users={users}
    />
    </>
    
  );
}

export default App;

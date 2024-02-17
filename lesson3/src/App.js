import './App.css';
import {Button} from './components/button/Button';
import User from './components/user/User';
import  Example  from './components/example/Example';
import Header from './components/header/Header';
import Text from './components/text/Text'
import Modal from './components/modal/Modal';
import { useState } from 'react';
import CountPage from './page/countPage/CountPage';
import Input from './components/input/Input';
import InputShow from './components/inputShow/InputShow';
import List from './components/list/List';


function App() {
  const navbar=['HOME','ABOUT US','CONTACTS']
  const [show,setShow]=useState(false)

  const[input, setInput]=useState('')

  const onChangeInput=(event)=>{
    setInput(event.target.value)

  }

  const handleShow=()=>{
    setShow(!show)
  }

  //list
  const [tasks, setTasks]=useState([
    {
      id:1 , 
      title: 'coding',
      completed: false
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

  const [searchTerm, setSearchTerm] = useState('');

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {
        show && <Modal handleShow={handleShow}> </Modal>
      }
      <button onClick={handleShow}>click</button>

      <CountPage/>
      <InputShow input={input}/>
      <Input placeholder={'type something'} onChangeInput={onChangeInput}/>

      <div>
        <h1>To Do List</h1>
        <List tasks={tasks} onDelete={deleteTask} />
      </div>

      <div>
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <List tasks={filteredTasks} onDelete={deleteTask} />
    </div>
    
   
    </>
  );
}

export default App;

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
  const lists=[
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
  ]

  return (
    <>
      {
        show && <Modal handleShow={handleShow}> </Modal>
      }
      <button onClick={handleShow}>click</button>

      <CountPage/>
      <InputShow input={input}/>
      <Input placeholder={'type something'} onChangeInput={onChangeInput}/>

      <div className="App">
        <List lists={lists} />
    </div>
    </>
  );
}

export default App;

import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PokemonPage from './page/pokemonPage/PokemonPage'
import CountPage from './page/countPage/CountPage'
import Users from './page/users/Users'
import Menu from './components/menu/Menu';
import UserInfo from './page/userInfo/UserInfo';
import FormPage from './page/formPage/FormPage';
import PokemonInfoPage from './page/pokemonInfoPage/PokemonInfoPage';



function App() {

  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<PokemonPage/>}/>
        <Route path='/count' element={<CountPage/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<UserInfo/>}/>
        <Route path='/form' element={<FormPage/>}/>
        <Route path='/pokemon/:id' element={<PokemonInfoPage/>}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;

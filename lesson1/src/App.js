import React from 'react'
import './App.css';
import Users from './components/users/Users';
import Title from './components/title/Title';
import About from './components/about/About'

function App() {
  const usersArray=['ali','asu','men']
  const titleObject={title: "value", subtitle: "value"}
  const aboutObject={title: "value", body: "value", link: "value"}
  return (
    <div>
      <Users users={usersArray}/>
      <Title titleObject={titleObject}/>
      <About aboutObject={aboutObject}/>
    </div>
  );
}

export default App;

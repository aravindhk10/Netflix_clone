import './App.css';
import React from 'react';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost';
import {Originals, Action, Comedy} from './urls'
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/> 
      <RowPost url= {Originals} title="Netflix Originals"/>
      <RowPost url = {Action} title="Action" isSmall/>
      <RowPost url = {Comedy} title="Comedy" isSmall/>
    </div>
  )
}

export default App;

import React from 'react';
import './App.css';
import Slider from './Slider';
import SidebarItem from './sidebarItem';

function App() {
  return(
    <div className="container">
      <div className="main-image"/>
      <div className="sideBar">
        <SidebarItem />
        <SidebarItem />
      </div>
      <Slider />
    </div>
  )
}

export default App;
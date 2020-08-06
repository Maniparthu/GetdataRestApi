import React from 'react';
import './App.css';
import Home from './components/home';
import Menu from './components/menu';
import Todo from './components/todo';
function App() {
  return (
    <div className="App">
     <Menu/>
         <Todo/>
        
       </div> 
  );
}

export default App;

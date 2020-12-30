import React from 'react';
import Todos from '../Todos/Todos.js';
import './Home.css';

export function Home() {
  return (
    <div id="principal">
     
     <div className="cuadros"><Todos status="Done"/></div> 
     <div className="cuadros"><Todos status="Todo"/></div> 
     <div className="cuadros"><Todos status="InProgress"/></div> 

     </div>
  )
};

export default Home;
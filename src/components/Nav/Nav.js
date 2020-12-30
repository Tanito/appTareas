import React from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';

//import Home from '../Home/Home.js';
//import AddTodo from '../AddTodo/AddTodo.js';

export function Nav() {
  return (
    <div id="navbar">
      <Link className="link a" to='/'>TODOS</Link> 
      <Link className="link b" to='/add'>Add Todo</Link> 
    </div>
  )
};

export default Nav;
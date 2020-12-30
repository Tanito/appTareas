import React from 'react'
import './App.css';

import { Route } from 'react-router-dom';

import Nav from './components/Nav/Nav.js';
import Home from './components/Home/Home.js';
import AddTodo from './components/AddTodo/AddTodo.js';


// En este componente deberias cargar tus rutas.
export function App() {
  return (
   // <React.Fragment>
          <div className="App">
      <Route path='/' render={() => <Nav />}/>
      <Route exact path='/' render={() => <Home/>}/>
      <Route exact path='/add' render={() => <AddTodo/>}/>
      
    </div>
  //  </React.Fragment>

  );
}

export default App;

import React from 'react';
import Todo from '../Todo/Todo'
import {connect} from 'react-redux'  // para importar el Store
import { Link } from 'react-router-dom';

export function Todos(props) {
  return (
    <div>
    <span >{props.status}</span>
 
    {props.todos.length !=0 && props.todos.map(t => {
      if(t.status == props.status){
        return(
        
            <Link to={`/edit/${t.id}`} key={t.id}>
          <Todo status={t.title} title={t.title} key={t.id}></Todo> 
          {/* o así: <Todo status={t.status} title={t.title} key={t.id}></Todo> */}
         </Link>
         
            )
      }

    })}
</div>
  )
};

function mapStateToProps(state){  // recibe todo lo que viene de redux, y retorna siempre un objeto.
  return{
    todos: state  // es el estado.
  }
}

export default connect(mapStateToProps,null)(Todos); // Todos para exportar el componente
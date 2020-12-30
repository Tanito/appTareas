import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actions/index';
import './AddTodo.css';

// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store. Si usas el hook `useDispatch` no funcionaran los test.

export function AddTodo(props) {

  const [input, setInput] = React.useState({  
    title: '',
    place: '',
    date: '',
    description: '',
  });

  const handleInputChange = function(e) {
    
     setInput({
       ...input, 
       [e.target.name]: e.target.value 
     });
   }

   function HandleOnSubmit(e){
    e.preventDefault()
        props.addTodo(input)   
      }
  
  return (
   <div > <form id="formAdd" onSubmit={(e)=>HandleOnSubmit(e)}>
      <h3>Título</h3>
      <input 
      name="title" 
      onChange={handleInputChange}>
      </input>
      <h4>Descripción</h4>
      <textarea 
      name="description" 
      onChange={handleInputChange}>
      </textarea>
      <h4>Lugar</h4>
      <input 
      name="place" 
      onChange={handleInputChange}>
      </input>
      <h4>Fecha</h4>
      <input 
      name="date" 
      onChange={handleInputChange}>
      </input>
      <button 
      type="submit">AGREGAR
      </button>
     </form>
    </div>
  )
};

function mapStateToProps(input){
  return{
    arr: input.initialState
  }
}

export default connect(mapStateToProps,{addTodo})(AddTodo)

// export default connect(null, mapDispatchToProps
// )(AddTodo)


// // const Form = connect(
// //   null,
// //   mapDispatchToProps
// // )(AddTodo);

// //export default AddTodo
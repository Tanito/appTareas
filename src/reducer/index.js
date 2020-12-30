import { addTodo, removeTodo, toInProgress, toDone } from '../actions';

const initialState = [];

const todos = (state = initialState, action) => {

  switch (action.type) {
    // Aca va tu codigo;
    case 'AddTodo':
     
      return state.concat(action.payload);

    case 'RemoveTodo':
      return state.filter((todo) => todo.id !== action.payload);

    case 'ToInProgress':

      state.map((todo) => {
        if (todo.id === action.payload) {
          todo['status'] = 'InProgress';
        }
      });
      return state;
    case 'ToDone':
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo['status'] = 'Done';
        }
      });
      return state;
    default:
      return state;
  }
};


export default todos;

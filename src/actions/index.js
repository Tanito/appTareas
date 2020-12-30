let todoId = 1;

export function addTodo(data) {
  return {
    type: 'AddTodo',
    payload: {
      ...data,
      status: 'Todo',
      id: todoId++,
    },
  };
}

// export const removeTodo = undefined

export function removeTodo(payload) {
  return { type: 'RemoveTodo', payload };
}

// export const toInProgress = undefined;

export function toInProgress(payload) {
  return { type: 'ToInProgress', payload };
}

// export const toDone = undefined;

export function toDone(payload) {
  return { type: 'ToDone', payload };
}
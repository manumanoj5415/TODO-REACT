// actions.js

export const addTask = (text) => {
    return {
      type: 'ADD_TASK',
      payload: {
        id: new Date().getTime(),
        text,
      },
    };
  };
  
  export const deleteTask = (id) => {
    return {
      type: 'DELETE_TASK',
      payload: {
        id,
      },
    };
  };
  
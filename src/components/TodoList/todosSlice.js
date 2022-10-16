import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, name: 'Learn Yoga', completed: false, priority: 'Low' },
    { id: 2, name: 'Learn Yoga 2', completed: true, priority: 'Medium' },
    { id: 3, name: 'Learn Yoga 3', completed: false, priority: 'High' },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.filter((todo) => todo.id === action.payload.id);
      currentTodo.completed = !currentTodo.completed;
    },
  },
});

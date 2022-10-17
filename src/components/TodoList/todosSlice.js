import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn Yoga", completed: false, priority: "Low" },
    { id: 2, name: "Learn Redux", completed: true, priority: "Medium" },
    { id: 3, name: "Learn Driving", completed: false, priority: "High" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find(
        (todo) => todo.id === Number(action.payload)
      );
      currentTodo.completed = !currentTodo.completed;
    },
  },
});

export const { toggleTodoStatus, addTodo } = todosSlice.actions;

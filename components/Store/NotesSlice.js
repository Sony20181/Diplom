import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos:[]
    }, //содержать самые разные ключи
    reducers:{ // методы редюсеры
        addTodo (state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed:false,

            });
          
        },
        removeTodo(state, action){
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            
        },
        completeTodo(state, action){
            let completedTodo = state.todos.find(todo => todo.id === action.payload)
            completedTodo.completed = !completedTodo.completed;
        },
    },

});

export const {addTodo,removeTodo,completeTodo} = todoSlice.actions;

export default todoSlice.reducer;
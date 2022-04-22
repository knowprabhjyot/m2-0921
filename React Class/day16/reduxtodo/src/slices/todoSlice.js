import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    todos: [],
}


export const todoSlice = createSlice({
    name: "Todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Math.random(),
                message: action.payload
            })
        },
        // deleteTodo: (state, action) => {
        //     console.log(action.payload, "Payload");
        //     console.log(state.todos.filter((todo) => todo.id !== action.payload));
        //     // console.log(filteredTodos, "filte3red");
        //     // return filteredTodos.todos;
        // }
    }
})
  
export const { addTodo } = todoSlice.actions
export default todoSlice.reducer

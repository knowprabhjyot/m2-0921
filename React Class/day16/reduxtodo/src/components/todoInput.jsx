import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";

const TodoInput = () => {

    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");

    const submitTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo));
    }


    return (
        <form onSubmit={submitTodo}>
            <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="Enter todo Here" />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoInput;
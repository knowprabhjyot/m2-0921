import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../slices/todoSlice";

const TodoList = () => {

    const dispatch = useDispatch();
    const state = useSelector((data) => data.todos);

    // const deleteVal = (id) => {
    //     dispatch(deleteTodo(id))
    // }

    return (
        <div>
            {
                state.todos.map((data) => {
                    return <div>
                        Task : {data.message}
                        {/* <button onClick={() => deleteVal(data.id)}>Delete</button> */}
                    </div>
                })
            }
        </div>
    )
}

export default TodoList;


// Form Accepts student Data
// StudentName
// StudentID
// College

// Context API

//  Table with Student Data List

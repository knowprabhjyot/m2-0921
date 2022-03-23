import { Link } from "react-router-dom";
import { studentList } from "./constant";
import Student from "./student";

const List = () => {



    return (
        <div>
            {studentList.map((item, index) => {
                return (
                    <Student item={item} key={index} />
                );
            })}

            <Link to="/">Go to Home</Link>
        </div>
    )
}

export default List;
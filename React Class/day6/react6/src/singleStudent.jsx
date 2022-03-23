import { useParams } from "react-router-dom";
import { studentList } from "./constant";
import Student from "./student"

const SingleStudent = () => {

    const { rollNumber } = useParams();

    const findStudent = studentList.find((student) => student.rollNumber == rollNumber);

    return (
        <div>
           <Student item={findStudent} />
        </div>
    )
}

export default SingleStudent;
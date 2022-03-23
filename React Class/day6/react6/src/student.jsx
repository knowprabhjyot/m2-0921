import React from "react";
import { Link } from "react-router-dom";

const Student = (props) => {
    return (
        <section>
            <Link to={`${props.item.rollNumber}`}><h1>Student Name: {props.item.name}</h1></Link>
            <p>College: {props.item.college}</p>
            <p>Roll Number: {props.item.rollNumber} </p>
        </section>
    );
}

export default Student;
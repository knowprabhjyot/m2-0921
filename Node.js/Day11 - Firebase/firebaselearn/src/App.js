import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { db } from './firebase-config';
import { getDocs, collection, addDoc, doc, deleteDoc, updateDoc  } from "firebase/firestore";

function App() {

  const [students, setStudents] = useState([]);
  const studentCollectionRef = collection(db, "students");

  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [age, setAge] = useState(0);
  const [rollNumber, setRollNumber] = useState(0);

  useEffect(() => {
    getStudents();
  }, []);


  const getStudents = async () => {
    const students = await getDocs(studentCollectionRef);
    const data = students.docs.map((doc) => ({
      ...doc.data(), id: doc.id
    }))
    
    setStudents(data);
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    const newStudent = {
      name,
      college,
      age: Number(age),
      rollNumber: Number(rollNumber)
    }

    try {
      await addDoc(studentCollectionRef,newStudent);
      alert("Student added succesfully");
    } catch(error) {
      console.log(error, "ERROR");
    }
  }


  const deleteStudent = async (student) => {
    const userDoc = doc(db, "students", student.id);
   
    try {
      await deleteDoc(userDoc);
      alert("Student deleted succesfully");
    } catch(error) {
      console.log(error, "ERROR");
    }
  }


  const updateStudent = async (student) => {
    const userDoc = doc(db, "students", student.id);
    const updateAgeObject = {
      age: student.age + 1
    }

    try {
      await updateDoc(userDoc, updateAgeObject)
      alert("Age updated succesfully");
    } catch (error) {
      console.log(error, "ERROR");
    }

  }

  return (
    <div>
      <h1 style={{ textAlign: "center"}}>Student information</h1>

      <form onSubmit={submitHandler}>
        <label htmlFor='name'>Name</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)}  />

        <label htmlFor='college'>College</label>
        <input type="text" value={college} onChange={(event) => setCollege(event.target.value)}  />

        <label htmlFor='age'>Age</label>
        <input type="number" value={age} onChange={(event) => setAge(event.target.value)}  />

        <label htmlFor='rollNumber'>Roll Number</label>
        <input type="number" value={rollNumber} onChange={(event) => setRollNumber(event.target.value)}  />

        <button>Submit</button>
      </form>

     <section>
     {
        students.map((student) => {
          return <div style={{
            border: "1px solid gray", background: "#c4bebe", margin: "20px", padding: "20px"
          }}>
            <div>
            <p>Student Name : {student.name}</p>
            <p>Student College : {student.college}</p>
            <p>Student Age : {student.age}</p>
            <p>Student Roll Number : {student.rollNumber}</p>
            </div>
            <button onClick={() => deleteStudent(student)}>Delete</button>
            <button style={{ marginLeft: "20px"}} onClick={() => updateStudent(student)}>Update</button>
          </div>
        })
      }
     </section>
    </div>
  );
}

export default App;

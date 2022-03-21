import { Component } from 'react';
import styles from './form.module.css';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            studentName: "",
            rollNumber: 0,
            college: "",
            email: ""
        }
    }

    submit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={(e) => this.submit(e)}>
                <label className={styles.boldText} for="studentName">Student Name</label>
                <input onChange={(e) => this.setState({ studentName: e.target.value})} value={this.state.studentName} className={styles.input} type="text" placeholder='Enter Student Name' id="studentName" required />
    
                <label className={styles.boldText} for="rollNumber">Roll Number</label>
                <input onChange={(e) => this.setState({ rollNumber: e.target.value})} value={this.state.rollNumber} className={styles.input} type="number" placeholder='Enter Roll Number' id="rollNumber" required />
    
                <label className={styles.boldText} for="college">College</label>
                <select value={this.state.college} onChange={(e) => this.setState({ college: e.target.value})}>
                    <option value="cornerstone">Cornerstone College</option>
                    <option value="ubc">UBC</option>
                    <option value="sfu">SFU</option>
                </select>
    
                <label className={styles.boldText} for="email">Email</label>
                <input onChange={(e) => this.setState({ email: e.target.value})} value={this.state.email} className={styles.input} type="email" placeholder='Enter Email' id="email" />
    
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form;
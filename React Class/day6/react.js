// Forms Revise (// keep it end )

// How to iterate data on UI

        // List of users whose data i want to show and its more than 100

        
 // Map 

 {studentList.map((item, index) => {
    return (
      <section key={index}>
        <h1>Student Name: {item.name}</h1>
        <p>College: {item.college}</p>
        <p>Roll Number: {item.rollNumber} </p>
      </section>
    );
  })}

// Routes in React
    // Routes
    // useParams    

// Small Application 
// Get list of users fro API
// Click on a user, provide an id in route
// when opened a route, you should be able to filter the item and show on UI
// Try to use Reusable code
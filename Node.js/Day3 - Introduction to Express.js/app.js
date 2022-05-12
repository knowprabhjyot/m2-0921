const express = require('express');
const app = express();
const PORT = 5000;

// const html = `
//     <ul>
//         <li>
//             Item1
//         </l1>
//     </ul>
// `

// let studentInfo = {
//     name: "Daniel",
//     college: "Cornerstone"
// }

let posts = [
    {
        id: 1,
        title: "Latest Technologies",
        author: "Prabh",
        timeRequired: "2 minutes",
        description: "This is a cool post about technologies"
    },
    {
        id: 2,
        title: "Life is tough in Vancouver",
        author: "Prabh",
        timeRequired: "4 minutes",
        description: "You have to hustle to survive here!"
    }
]

app.get('/', (request, response) => {
    return response.status(404).json(studentInfo);
})

app.get('/posts', (request, response) => {
    return response.status(200).json(posts);
})

app.get('/posts/:id', (request, response)  => {
    // console.log(request.params.id);

    // I have an array
    // I have id 
    // Can i return an object based on the above information ?
    // return response.send("WRKING!");

    const requestedID = request.params.id; // it is of string format by default
    console.log(requestedID, "Requested ID");
    const foundItem = posts.find(function(item) {
        if (item.id == requestedID) {
            return item;
        }
    });

    console.log(foundItem, "Found ITem");

    return response.status(200).json(foundItem);


    // For loop
    // ES6 there was function called as Find
})

app.listen(PORT, (request, response) => {
    console.log(`Server running at port ${PORT}`);
})
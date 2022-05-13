const express = require('express');
const PORT = 5000;
const app = express();


// Middleware
// Middleware is like a wall in between your backend code that could perform any manipulation



// This middleware converts incoming data to json format
app.use(express.json());

let posts = [
    {
        id: Math.random(),
        title: "Latest Technologies",
        author: "Prabh",
        timeRequired: "2 minutes",
        description: "This is a cool post about technologies"
    },
    {
        id:  Math.random(),
        title: "Life is tough in Vancouver",
        author: "Prabh",
        timeRequired: "4 minutes",
        description: "You have to hustle to survive here!"
    }
]


app.get('/', (request, response) => {
    response.send("Endpoints!");
})


// GET API
app.get('/api/v1/posts', (request, response) => {
    // 200 --> Succesfull response
    return response.status(200).json({
        message: "Succesfully fetched the data",
        data: posts
    });
})


// GET API BY ID
app.get('/api/v1/posts/:id', (request, response) => {
    const id = request.params.id;

    const foundItem = posts.find((item) => {
        if (item.id == id) {
            return true;
        }
    })

    if (!foundItem) {
        // 404 --> Resource Not Found
        return response.status(404).json({
            message: "Post not found!",
            data: {}
        })
    }

    return response.status(200).json({
        message: "Post succesfully found!",
        data: foundItem
    });

})

// POST API
app.post('/api/v1/posts', (request, response) => {
    const incomingData = request.body;

    if (!incomingData.title || !incomingData.author || !incomingData.timeRequired || !incomingData.description) {

        // 500 --> Whenever client sends incorrect format of data, or there is some issue in database we send 500 error (Internal server error)
        return response.status(500).json({
            message: "One of the information is missing!"
        })
    }

    posts.push({...incomingData, id: Math.random()});

    // 201 ---> When a new resource is created we give 201 status code
    return response.status(201).json({
        message: "Succesfully created a post!",
        data: incomingData
    });
})


// PUT API
// When you want to update a data!
app.put('/api/v1/posts/:id', (request, response) => {
    const incomingData = request.body;
    const id = request.params.id;

    if (!incomingData.title || !incomingData.author || !incomingData.timeRequired || !incomingData.description) {

        // 500 --> Whenever client sends incorrect format of data, or there is some issue in database we send 500 error (Internal server error)
        return response.status(500).json({
            message: "One of the information is missing!"
        })
    }


    // .map of an array
    let updatedPosts = posts.map(function(item) {
        console.log(item);
        if (item.id == id) {
            
            item = incomingData;
        }
        return item;
    })

    // console.log(updatedPosts, 'value');

    return response.status(200).json({
        message: "Succesfully updated the posts!",
        data: updatedPosts
    })

    // It manipulates data inside the array if you give condition
})


// DELETE API
app.delete('/api/v1/posts/:id', (request, response) => {
    const id = request.params.id;
    

    // pop is used to delete a value from the array but it only deletes the last value
    // Filter
    // splice functionality

    let index = posts.findIndex((item) => item.id == id);
    
    if (index === -1) {
        return response.status(404).json({
            message: "Given post not found!"
        })
    } else {
        posts.splice(index, 1);
    }

    return response.status(200).json({
        message: "Succesfully deleted",
        data: posts
    })
})



app.listen(PORT, (request, response) => {
    console.log(`Server running at port ${PORT}`)
})

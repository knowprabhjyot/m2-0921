// Tomorrow we discsus localstorage vs cookies vs sessionstorage

// localstorage
Localstorage is a like database but at the browser level, so that the client application can make use of it for operations which require data persistence.

// Methods for lacalstorage

1. localStorage.getItem('key');
2. localStorage.setItem('key', JSON.stringify(value)) 
// NOTE: If the value is not a string, prefer saving it in JSON.stringify format
3.localStorage.removeItem('key'); // This is how you delete


// For Example - Dark Theme and Light Theme
// Saving Tokens
// Social media applications, that you don't have to login again, if you close the tab


// SessionStorage
// Its similar to localstorage, but it expires as soon as the browser tab is closed

// Methods for SessionStorage

1. sessionStorage.getItem('key');
2. sessionStorage.setItem('key', JSON.stringify(value)) 
// NOTE: If the value is not a string, prefer saving it in JSON.stringify format
3.sessionStorage.removeItem('key'); // This is how you delete

// Example - Banking application



// Cookies
// Cookies is also to store data on the client, but that data is accessible to the server if you try to communicate with the server, for example using API calls.
// Example - Access token

// REST API ()
// Representational State transfer Application Programming Interface
// API helps

// HTTP
// Hypter Text Transfer Protocol


// There are a lot of protocols that Web community have introduced

1. HTTP Client - Server
2. FTP - File transfer Protocol , Filezilla
3. Real Time connectivity (), Web RTC

// Web 3.0, Metaverse

// Client - Browser, Postman

 // Basics
 
 // Path Params
 Whenever you try a request a resourse from the server, lets say profile of a user
 www.facebook.com/profile/prabhjyot/27
 
 
 // Query Params
 www.facebook.com/profile?name=prabhjyot&age=27
 
 // Get
  - Whenever you want to get/fetch something from the database/server, we use GET Method with API
  - Most common status code sent from backend is 200 
  - We don't send any body
  
  http://localhost:3000/users
  
   NOTE: If you want to get a particular user from the server/database
    http://localhost:3000/users?id=100
  
  
 // Post
  - Whenever you want to create something on the server/database, we use POST method
  - Most common status sent from backend is 201
  - We send  body

    http://localhost:3000/users
    
    - So you have to send a body from the client to the server , so it can save that value


 // Put
 - Whenever you want to update/create something on the server/database, we use PUT method
 - Most common status code sent from backend is 200 
 - We send  body
     http://localhost:3000/users?id=100
 
   - So you have to send a body from the client to the server , so it can save that value
 
 // Delete
 - Whenever you want to delete something/resource on the server/database, we use DELETE method
 - Most common status sent from backend is 200
 - We don't send any body
     
http://localhost:3000/users?id=100



// Headers**********
// End point - address
// Additional informatin - charger, cover (Request HEADER)
// Request BODY - Laptop



// CORS ISSUE

// Cross origin resource sharing
// It has do with the vulnerability of the browser

// Front end - localhost:3000

// Backend Server - localhost:5000

// 3000 PORT ----> 5000 PORt
// 5000 PORT ----> 3000 PORT

// Server you have to setup cors

app.use(cors()) // This is how you handle it
// on the server for Node.js

cors --> Origin 

// * 
// localhost:3000






 // TOMORROW ******* 
 // HTML Canvas, SVG, Animations
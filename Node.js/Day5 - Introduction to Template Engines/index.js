const express = require('express');
const app = express();
const PORT = 5000;

// This middleware will allow us to use html templates from a particular folder (public)
// app.use(express.static('public'));


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const array = ["Prabh", "Hector", "Tomas", "Wisam", "Ceci", "Elham"];

    let html = '<h1 style="color: red">Hello</h1>';
    res.render('index', { name: html })
})

app.listen(PORT, (req, res) => {
    console.log(`Server running at port ${PORT}`);
})

// THere is one problem with Frontend Frameworks like react --> They are  not that good in SEO

// h1 , h5
// ol ul

// Symantic html tags
// Are those html tags which have a meaning

// symantic     // non-symantic
{/* <cite>           <div>
<p>              <span>
<section>
<article>
<table>
<h3>
<header> */}


// Block elements vs non block elements html
{/* <div>        <span>
<p>

// Block elements are those element tags which take the entire width 
// Non-blocking elements are those elements which take the width of their own content */}



// Node Mailer - Where your node.js server can send emails to your customer


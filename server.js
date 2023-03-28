const express = require('express');
const mongoose = require('mongoose');
const register = require('./Controlllers/register.controller')

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Mongodb connection
const url = 'mongodb://127.0.0.1:27017';
mongoose.connect(url,
    { useUnifiedTopology: true,
      useNewUrlParser: true 
    }
)
.then(() => {
    console.log('Connected to Database')
})
.catch((err) => console.log(err));

app.post('/register',register)

const port = 8000;

app.listen(port, () => {
    console.log('Running on port ' +  port)
})
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');


const app = express();

mongoose.connect('mongodb+srv://Lex:1234567890handows@cluster0-iiicg.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333, console.log("Rodando na porta 3333"));
 

// Métodos HTTP: get, post, put, delete 
//Query Params:req.query (filtros, ordenação, paginação, ...)
//Route Params:
//Body: request.body 

// MongoDB

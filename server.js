const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
    useNewUrlParser:true, useUnifiedTopology:true });

/*
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/nodeapi'), {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        };
        console.log("MongoDB Conected")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}; 
*/
requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
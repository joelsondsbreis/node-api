const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando app
const app = express();

//iniciando o DB
/** mongoose.connect('mongodb://localgost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true } ); **/
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localgost:27017/nodeapi'), {
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
requireDir('./src/models');

const Product = mongoose.model('Product');
//teste de primeira rota
app.get('/', (req, res) => {
    Product.create( {
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    })


    return res.send("Hello world");
})

app.listen(3001);
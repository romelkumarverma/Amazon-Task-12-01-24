const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(express.json());

const PORT = 4000;

app.use(cors({
    origin:['http://localhost:3000'],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))

const {category1} = require('./Routes/category');
app.use('/', category1);

const {product1} = require('./Routes/product');
app.use('/',product1);

app.use('/public',express.static(path.join(__dirname,'public')))


app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}...`);
})
const express = require('express');

const {category_post, category_get, category_update, category_delete} = require('../Controller/category')
const category1 = express.Router();


category1.post('/api/category/post', category_post);
category1.get('/api/category/get', category_get);
category1.put('/api/category/update/:categoryid', category_update);
category1.delete('/api/category/delete/:categoryid', category_delete);


module.exports={category1};
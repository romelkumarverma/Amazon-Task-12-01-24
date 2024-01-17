const express = require('express')
const multer = require('multer');
const path = require('path');

const product1 = express.Router();

const {product_post, product_get, product_update, product_delete} = require('../Controller/product');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, './public/Images')
    },
    filename:(req,file,cb)=>{
        const filename=`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
        cb(null,filename)
    }
})

const upload = multer({storage:storage})

product1.post('/api/product/post', upload.single('product_image'), product_post);
product1.get('/api/product/get', product_get);
product1.put('/api/product/update/:categoryid', upload.single('product_image'), product_update);
product1.delete('/api/product/delete/:categoryid', product_delete);


module.exports={product1}

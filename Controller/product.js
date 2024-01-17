const con = require('../Model/model');

const product_post = (req, res)=> {
    var fullUrl = req.protocol + "://" + req.get("host")+'/public/Images/'
    const data = {
        categoryid:req.body.categoryid,
        productname:req.body.productname,
        product_price:req.body.product_price,
        product_image:fullUrl+req.file.filename
    }
    const sql = `INSERT into product set ?`
    con.query(sql,data,(err, result)=>{
        if(err){
            console.log("Product data is not posted");
            res.json(err);
        } else {
            console.log("Product data is posted");
            res.json("result");
        }
    })
}


const product_get = (req, res)=> {
    const sql = `SELECT * from product `
    // const categoryid = req.params;
    con.query(sql,(err, result)=>{
        if(err){
            console.log("Product is not getting...");
            res.json(err)
        } else {
            console.log("Product is getting...");
            res.json(result)
        }
    })
}

// const product_update = (req,res)=>{
//     const sql = `update product set productname = ?, product_price = ?, photo = ? where categoryid = ?`
//     const categoryid = req.params.categoryid;
//     const data = {
//         productname:req.body.productname,
//         product_price:req.body.product_price
//     };
//   const  product_image=req.file.filename
//     con.query(sql, [data,categoryid,product_image],(err, result)=>{
//         if(err){
//             console.log("Product not updated..");
//             res.json(err)
//         } else {
//             console.log("product updated...");
//             res.json(result)
//         }
//     })
// }

const product_update = ((req, res) => {

    //var fullUrl = req.protocol + "://" + req.get("host")+'/public/Images/'

    const categoryid = req.params.categoryid;
    console.log('category id',categoryid)
    // console.log(req.body, categoryid)
    // const sql = `UPDATE product set productname= ?, product_price= ?, product_image= ?, Where categoryid= ${categoryid}`
    const sql = `UPDATE product set productname= ?, product_price= ?, product_image= ? Where categoryid = '${categoryid}'`
        const values = [
            req.body.productname,
            req.body.product_price,
            req.file.filename
        ]
        console.log('query',sql)
    con.query(sql, values, (err, result) => {
        if(err) {
            console.log("Not updated..",err.sqlMessage)
            res.json(err)
        } else {
            console.log("Updated..")
            console.log(result)
            
            res.json(result);
        }
    })
})


// const product_update = (req, res)=>{
//     const sql = `update product set ? where categoryid = ?`
//     const data = req.body;
//     console.log(data)
//     const categoryid = req.params.categoryid;
//     con.query(sql, [data,categoryid],(err, result)=>{
//         if(err){
//             console.log("product data is not updated..");
//             res.json(err)
//         } else {
//             console.log("product data is updated...");
//             res.json(result);
//         }
//     })
// }



const product_delete = (req, res)=>{
    const sql = `delete from product where categoryid = ?`
    const categoryid = req.params.categoryid;
    con.query(sql, categoryid,(err, result)=>{
        if(err){
            console.log("product not deleted");
            res.json(err)
        } else {
            console.log("product deleted");
            res.json(result);
        }
    })
}


module.exports={product_post,product_get,product_update,product_delete};
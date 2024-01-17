const con = require('../Model/model');

const category_post = (req,res)=>{
    const data = req.body;
    const sql = `INSERT into category set ?`
    con.query(sql,data,(err,result)=>{
        if(err){
            console.log("Category data is not posted...");
            res.json(err)
        } else {
            console.log("Category data is posted...");
            res.json(result)
        }
    })
}

const category_get = (req, res)=>{
    const sql = `SELECT * from category`
    // const categoryid = req.params.categoryid
    con.query(sql,(err, result)=>{
        if(err){
            console.log("Category data is not getting");
            res.json(err);
        } else {
            console.log("Category data is getting successfully...")
            res.json(result)
        }
    })
}

const category_update = (req, res)=>{
    const sql = `update category set ? where categoryid = ?`
    const data = req.body;
    console.log(data)
    const categoryid = req.params.categoryid;
    con.query(sql, [data,categoryid],(err, result)=>{
        if(err){
            console.log("Category data is not updated..");
            res.json(err)
        } else {
            console.log("Category data is updated...");
            res.json(result);
        }
    })
}

const category_delete = (req, res)=>{
    const sql = `delete from category where categoryid = ?`
    const categoryid = req.params.categoryid;
    con.query(sql,categoryid,(err,result)=>{
        if(err){
            console.log("Category data is not deleted..");
            res.json(err);
        } else {
            console.log("Category data is deleted...");
            res.json(result);
        }
    })
}

module.exports={category_post,category_get,category_update,category_delete}

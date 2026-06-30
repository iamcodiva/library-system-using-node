const db=require('../config/db');
const bookModel={

fetchAll:()=>{
return new Promise((resolve,reject)=>{
const sql= "SELECT * FROM books";
db.query(sql,(err,res)=>{
if (err){
return reject(err);
}
return resolve(res);
})
});
}
,

insert:(title,author,isbn,category,price,total)=>{
const sql="INSERT INTO books(Title,Author,Isbn,category,Price,Total) Values (?,?,?,?,?,?)";
db.query(sql,[title,author,isbn,category,price,total],(err,res)=>{

})


}



}




module.exports=bookModel
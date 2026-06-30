const bookModel= require('../models/bookModel')

async function showBook(req,res){
 return await bookModel.fetchAll();
}

async function addBook(req,res){
const {title,author,isbn,category,price,total}=req.body;
 bookModel.insert(title,author,isbn,category,price,total);
 res.redirect('/dashboard');

}


module.exports={showBook,addBook}
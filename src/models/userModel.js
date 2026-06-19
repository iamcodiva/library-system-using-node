const db=require('../config/db');
const userModel={
  create:(firstName,lastName,email,password)=>{
    const sql="INSERT INTO users(firstName,lastName,email,userPassword VALUES(?,?,?,?)";
    db.query(sql,[firstName,lastName,email,password],(err,res)=>{
      if(err){
        console.log(err);
      }

    });
  },
  fetch:(id)=>{

    const sql="SELECT * FROM users WHERE id=?";
    db.query(sql,[],(err,res)=>{
      return res;
    })
  }
,
findbyEmail:(email,password)=>{
const sql="SELECT * FROM users WHERE email=?";

db.query(sql,[email],(err,res)=>{
if (password==res.userPassword){
  return true;
}else{
  return false;
}

});
}
}
module.exports=userModel
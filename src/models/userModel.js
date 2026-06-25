const db=require('../config/db');
const bcrypt=require("bcrypt");
const userModel={
  create: (firstName,lastName,email,password)=>{
    return new Promise(async (resolve,reject)=>{
      const hashPassword=await bcrypt.hash(password,10);
      const sql="INSERT INTO users(firstName,lastName,email,userPassword) VALUES(?,?,?,?)";
      db.query(sql,[firstName,lastName,email,hashPassword],(err,res)=>{
      if(err){
        console.log(err);
      }

    });


    })
    
  },

findbyEmail:(email)=>{
  return new Promise((resolve,reject)=>{
    const sql="SELECT * FROM users WHERE email=?";
    db.query(sql,[email],(err,res)=>{
      if(err){
        return reject(err);
      }
      if (res.length==0){
         resolve(null);
      }else{
         resolve(res[0]);
      }
    });




  });
}



}
module.exports=userModel
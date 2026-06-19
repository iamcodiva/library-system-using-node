const userModel=require("../models/userModel");
function showSignup(req,res){
res.render("register");
}
function handleSignup(req,res){
  const {firstName,lastName,email,password,confirmPassword}=req.body;
  if(firstName==''||lastName==''||email==''||password==''||confirmPassword==''){
    console.log("All fileds are required");

  }else if(password != confirmPassword){
    console.log("confirm passwors must be the same");
  }else{
     console.log("you are succesufully loged in");
      userModel.create(firstName,lastName,email,password,confirmPassword);
  }
}
function showLogin(req,res){
  res.render('login');
}
function handleLogin(req,res){
const {email,password}=req.body;
if(userModel.findbyEmail){
  res.render('userDashboard');
}

}
module.exports={showSignup,handleSignup,showLogin,handleLogin}
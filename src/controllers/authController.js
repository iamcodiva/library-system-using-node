const userModel=require("../models/userModel");
function showHome(req,res){
res.render('index');
}
function showAbout(req,res){
res.render('About');
}
function showContact(req,res){
res.render('Contact');
}
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
module.exports={showSignup,handleSignup,showLogin,handleLogin,showHome,showAbout,showContact}
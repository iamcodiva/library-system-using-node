const userModel=require("../models/userModel");

const bcrypt=require("bcrypt");
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
async function handleSignup(req,res){
  const {firstName,lastName,email,password,confirmPassword}=req.body;
  if(firstName.trim()==''||lastName.trim()==''||email.trim()==''||password.trim()==''||confirmPassword.trim()==''){
    const err="all fileds are required";
    return res.render("register",{err,errfield:['firstName','lastName','email','password','confirmPassword'] ,values:{firstName:firstName,lastName:lastName,email:email,password:password,confirmPassword:confirmPassword}});
  }else if(password.length<6){
     const err ="the password length must be atleast 6";
    return res.render("register",{err,errfield:['password'] ,values:{firstName:firstName,lastName:lastName,email:email,password:password,confirmPassword:confirmPassword}});

  }else if(password.trim() != confirmPassword.trim()){
    const err="confirm passwors must be the same";
    return res.render("register",{err,errfield:['password','confirmPassword'],values:{firstName:firstName,lastName:lastName,email:email,password:password,confirmPassword:confirmPassword}});
}else{
      const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(regx.test(email)){
        const emailExist=await userModel.findbyEmail(email);
        if(emailExist){
          const err="This Email is already Rigistred";
          return res.render("register",{err,errfield:['email'],values:{firstName:firstName,lastName:lastName,email:email,password:password,confirmPassword:confirmPassword}});
        }else{
          const role='Member';
           userModel.create(firstName,lastName,email,password,role);
          return res.redirect('/login');
        }
      }else{
        const err="please Enter Valid Email";
        return res.render("register",{err,errfield:['email'],values:{firstName:firstName,lastName:lastName,email:email,password:password,confirmPassword:confirmPassword}});
      }
  
      
  }
}
function showLogin(req,res){
  res.render('login');
}
async function handleLogin(req,res){
const {email,password}=req.body;
if(email.trim()==''||password.trim()==''){
 return res.render('login',{err,errfield:['email','password'],values:{email:email,password:password}})
}else{
  const emailExist=await userModel.findbyEmail(email);
  if(emailExist){
    const userPassword=emailExist.userPassword;
    const ComparePassword=await bcrypt.compare(password,userPassword);
    if(ComparePassword){
      req.session.user={
       userId:emailExist.id,
       firstName:emailExist.firstName,
       role:emailExist.userRole
      }
    
      return res.redirect('/dashboard');
    }else{
      const err="Wrong password";
      return res.render('login',{err,errfield:['password'],values:{email:email,password:password}})
    }

  }else{
    const err="you are not registered";
     return res.render('login',{err,errfield:['email'],values:{email:email,password:password}})
  }
}


}


function handleLogout(req,res){
req.session.destroy((err)=>{
  if(err){
    console.log("can not logout");
    return res.render('dashboard')
  }

  res.clearCookie('connect-sid');
  res.redirect('/');
});

}
module.exports={showSignup,handleSignup,showLogin,handleLogin,showHome,showAbout,showContact,handleLogout}
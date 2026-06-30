const roles={
  ADMIN:'Admin',
  STAFF:'Staff',
  MEMBER:'Member'
}


function isGranted(...grantedRoles){


  return(req,res,next)=>{
 if(!req.session||!req.session.user){
  return res.redirect('/login')
 }
 try{
  if(userRole && grantedRoles.includes(userRole)){
    next();
  }else{
    res.redirect('/dashboard');
  }
  }catch{
  res.redirect('/dashboard');
  }
}
}
module.exports={roles,isGranted}
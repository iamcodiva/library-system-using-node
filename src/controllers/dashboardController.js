function showDashboard(req,res){
const firstName=req.session.user.firstName;
const role=req.session.user.role;
        return res.render('dashboard',{firstName,role});
}

module.exports={showDashboard}
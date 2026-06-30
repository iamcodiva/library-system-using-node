const bookController=require('../controllers/bookController')


async function showDashboard(req,res){
const firstName=req.session.user.firstName;
const role=req.session.user.role;
const booksData=await bookController.showBook();
        return res.render('dashboard',{firstName,role,books:booksData});
}



module.exports={showDashboard}
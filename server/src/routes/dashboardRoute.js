const express=require('express');
const router=express.Router();
const dashboardController=require('../controllers/dashboardController');
const bookController=require('../controllers/bookController')
const {isLoggedIn} = require('../middlewares/auth');
const {isGranted,roles} = require('../middlewares/rebac');


router.get('/',isLoggedIn,dashboardController.showDashboard);
router.post('/addbook',isGranted(roles.ADMIN),bookController.addBook);
module.exports=router
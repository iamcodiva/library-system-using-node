const express=require('express');
const authController=require('../controllers/authController');
const authRouter=express.Router();


authRouter.get('/',authController.showHome);
authRouter.get('/About',authController.showAbout);
authRouter.get('/Contact',authController.showContact);
authRouter.get('/signup',authController.showSignup);
authRouter.post('/signup',authController.handleSignup);
authRouter.get('/login',authController.showLogin);
authRouter.post('/login',authController.handleLogin)

module.exports=authRouter;
require("dotenv").config();
const express = require("express");
const session=require('express-session');
const authRouter = require("./src/routes/authRoute");
const dashboardRouter = require("./src/routes/dashboardRoute");
const app = express();


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(session({
  secret:process.env.SESSION_KEY,
  resave:false,
  saveUninitialized:false, 
  cookie:{
    secure:false,
    maxAge:360000
  }
}));
app.use("/", authRouter);
app.use('/dashboard',dashboardRouter)

app.listen(3000, () => {
  console.log("i am listening");
});

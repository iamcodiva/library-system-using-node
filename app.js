const express=require(express);
const authRouter=require('./src/routes/authRoute');

const app=express();
app.use("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.get('/',(req,res)=>{
  res.render("index");
})
app.use('/',authRouter);


app.listen(3000,()=>{
  console.log("i am listening");
}
);
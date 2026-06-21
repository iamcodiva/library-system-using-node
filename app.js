const express = require("express");
const app = express();
const authRouter = require("./src/routes/authRoute");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", authRouter);

app.listen(3000, () => {
  console.log("i am listening");
});

require("dotenv").config();
const express=require("express")
const app=express();
const cors=require("cors");
const port=process.env.PORT;
const routes=require('./app/routes')
app.use([cors(),routes]);
app.listen(port,()=>{
  console.log(`server is running on ${port}`);
})
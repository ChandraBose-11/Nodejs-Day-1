import express from "express";
//import sapce


//declaration/initailization
const app = express();
const PORT = 4000;

//Middleware(default middleaware)
app.use(express.json())


app.get('/',(req,res)=>{
  // res.status(200).json({message:'Hi Welcome to our first node app'})
  res.status(200).send(`<span style="background-color:Aqua;color:black"><b>Welcome to our first app in nodejs</b></span>`)
})

//running part
app.listen(PORT, () => {
  console.log(`App is listening on the port=${PORT}`);
});

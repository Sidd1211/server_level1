import express from 'express';

const app = express();
const port = 3000;

app.listen(port,()=>{
  console.log(`App is listening on ${port}`);
});

app.get('/',(req,res)=>{
  res.send('welcome to my server');
});
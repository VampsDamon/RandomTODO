const express=require('express');
// const cors=require('cors')

const app=express();

app.get('/',(req,res)=>{
  const TODOS=[];
  let i=Math.floor(Math.random()*10)

  for(let j=1;j<=i;j++){
     let todo={
        title:`TODO ${j}`,
        description:`This is TODO ${j}`

     }
     TODOS.push(todo);
  }

  return res.json({TODOS})
})

// app.use(cors())



app.listen(3000,()=>{
    console.log("Listening on PORT : 3000")
})

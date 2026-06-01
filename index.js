 const express = require('express');
 const app = express();
 const port = 4000;

 const cors = require('cors');


 app.get('/',(req,res)=>{
    res.send('Hellooo user')
 })


 app.listen(port, ()=>{
    console.log('Server is running at port number :', port);
 })
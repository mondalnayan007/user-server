 const express = require('express');
 const cors = require('cors');
 const app = express();
 const port = 4000;


app.use(cors());
app.use(express.json())
 
 const users = [
  {
    id: 1,
    name: "Arif Rahman",
    email: "arif.rahman@example.com",
    role: "Admin",
    
    
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    
    email: "nusrat.jahan@example.com",
    role: "User",
    
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    
    email: "tanvir.ahmed@example.com",
    role: "User",
    
  },
  {
    id: 4,
    name: "Sadia Islam",
    
    email: "sadia.islam@example.com",
    role: "Moderator",
    
  },
  {
    id: 5,
    name: "Imran Hossain",
    
    email: "imran.hossain@example.com",
    role: "User",
   
  },
  {
    id: 6,
    name: "Farhana Chowdhury",
    
    email: "farhana.c@example.com",
    role: "User",
    
  },
  {
    id: 7,
    name: "Asif Iqbal",
    
    email: "asif.iqbal@example.com",
    role: "User",
    
  },
  {
    id: 8,
    name: "Mehedi Hasan",
   
    email: "mehedi.hasan@example.com",
    role: "Moderator",
    
  },
  {
    id: 9,
    name: "Anika Tasnim",
    
    email: "anika.t@example.com",
    role: "User",
    
  },
  {
    id: 10,
    name: "Sajid Khan",
    
    email: "sajid.khan@example.com",
    role: "User",
    
  }
];


 app.get('/',(req,res)=>{
    res.send('Hellooo user')
 })

 app.get('/users',(req,res)=>{
    res.send(users)
 })
 app.post('/users',(req,res)=>{
    console.log('getting user from client side ', req.body);
    const newUser = req.body;
 })


 app.listen(port, ()=>{
    console.log('Server is running at port number :', port);
 })
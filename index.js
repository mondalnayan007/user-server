 require('dotenv').config();
 const express = require('express');
 const { MongoClient, ServerApiVersion } = require('mongodb');
 const cors = require('cors');
 const app = express();
 const port = 4000;


app.use(cors());
app.use(express.json())

const uri = process.env.MONGO_URI;
 
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

const products = [
  {
    id: 1,
    title: "Minimalist Wireless Keyboard",
    description: "Ultra-slim Bluetooth keyboard with mechanical typing feel and long-lasting battery life.",
    price: 89.99,
    url: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Premium Noise-Canceling Headphones",
    description: "Immersive sound experience with advanced active noise cancellation and soft leather earcups.",
    price: 299.00,
    url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Ergonomic Wooden Desk Organizer",
    description: "Handcrafted walnut wood organizer to keep your workspace clean and premium.",
    price: 45.00,
    url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "Smart Fitness Watch",
    description: "Track your daily steps, heart rate, and sleep quality with a sleek AMOLED display watch.",
    price: 149.50,
    url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    title: "Matte Black Ceramic Coffee Mug",
    description: "Insulated ceramic mug designed to keep your morning coffee warm for hours.",
    price: 24.99,
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    title: "Leather Passport Wallet",
    description: "Genuine leather travel wallet with dedicated slots for cards, cash, and passports.",
    price: 59.00,
    url: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 7,
    title: "Portable Bluetooth Speaker",
    description: "Compact and waterproof speaker delivering deep bass and crystal-clear high notes.",
    price: 79.99,
    url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 8,
    title: "Stainless Steel Water Bottle",
    description: "Eco-friendly, double-walled vacuum insulated bottle for hot or cold beverages.",
    price: 32.00,
    url: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 9,
    title: "Minimalist Leather Backpack",
    description: "Sleek and spacious laptop backpack made from water-resistant premium leather.",
    price: 120.00,
    url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 10,
    title: "Dimmable LED Desk Lamp",
    description: "Modern aluminum lamp with adjustable brightness levels and built-in wireless charger.",
    price: 65.50,
    url: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?w=800&auto=format&fit=crop&q=60"
  }
];




 app.get('/',(req,res)=>{
    res.send('Hellooo user')
 })

 // Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    
  }
}
run().catch(console.dir);

            //  mongoDb connection part close



 app.get('/users',(req,res)=>{
    res.send(users)
 })
 app.post('/users',(req,res)=>{
    
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
    console.log('getting user from client side ', newUser);
 })

 app.get('/products',(req,res)=>{
  res.send(products);
 })

 app.post('/products',(req,res)=>{
     console.log(req.body);
     const newProduct = req.body;
     newProduct.id = products.length + 1;
     products.push(newProduct);
     res.send(newProduct)
     console.log('from client side',newProduct);
 })


 app.listen(port, ()=>{
    console.log('Server is running at port number :', port);
 })
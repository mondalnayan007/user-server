require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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






app.get('/', (req, res) => {
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



    const userDB = client.db('userDB');
    const usersCollection = userDB.collection('users');
    const productsCollection = userDB.collection('products');



    app.post('/products', async (req, res) => {
      const newProduct = req.body;
      const result = await productsCollection.insertOne(newProduct)
      res.send(result);
    })

    app.get('/products',async(req,res)=>{
      const cursor = productsCollection.find();
      const findResult = await cursor.toArray();
      res.send(findResult);
    })

    app.get('/products/:id',async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await productsCollection.findOne(query);
      res.send(result)
    })

    app.patch('/products/:id',async(req,res)=>{
      const id = req.params.id;
      const updateProduct = req.body;
      const query = {_id: new ObjectId(id)};
      const update = {
        $set: {
          title: updateProduct.title,
          description: updateProduct.description,
          price: updateProduct.price,
          url: updateProduct.url
        }
      }
      const options = {};
      const result = await productsCollection.updateOne(query,update,options);
      res.send(result);
    })


    app.post('/users', async (req,res)=>{
      const newUser = req.body;

      const result = await usersCollection.insertOne(newUser);
      res.send(result)

    })

    app.get('/users',async(req,res)=>{
      const cursor = usersCollection.find();
      const findResult = await cursor.toArray();
      res.send(findResult);
    })

    app.delete('/users/:id',async(req,res)=>{
      const id = req.params.id;
         const query = {_id: new ObjectId(id)}
         const result = await usersCollection.deleteOne(query);
         res.send(result);
    })

    app.get('/users/:id',async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await usersCollection.findOne(query);
      res.send(result)
    })

    app.patch('/users/:id',async(req,res)=>{
      const id = req.params.id;
      const updateUser = req.body;
      console.log('to update',id,updateUser);
      const query = {_id: new ObjectId(id)};
      const update = {
        $set:{
          name:updateUser.name,
          email:updateUser.email,
          role:updateUser.role
        }
      }
      const options = {};
       const result = await usersCollection.updateOne(query,update,options);
       res.send(result);
    })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error

  }
}
run().catch(console.dir);

//  mongoDb connection part close



// app.get('/users', (req, res) => {
//   res.send(users)
// })


// app.get('/products', (req, res) => {
//   res.send(products);
// })




app.listen(port, () => {
  console.log('Server is running at port number :', port);
})
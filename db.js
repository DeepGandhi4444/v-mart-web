const { MongoClient } = require("mongodb");
const express = require('express');
const uri = "mongodb://localhost:27017/";
const cors = require("cors");
const client = new MongoClient(uri);
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json());
async function getdb() {
  var data;
  try {
    await client.connect();
    const database = client.db("products");
    const collection = database.collection("products-list");
    const cursor = collection.find({});
    const documents = await cursor.toArray();
    data=documents;
  }
   finally {
    await client.close();
    
  }
  
  return(data);
}
app.get('/api/products...', async (req, res) => {
  try {
   let d =await getdb();
   console.log(d);
   res.json(d);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
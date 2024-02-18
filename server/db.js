const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
// const { default: axios } = require("axios");
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/";

// import { startStandaloneServer } from '@apollo/server/standalone';

const {DATA} = require( './data');
// const client = new MongoClient(uri);
const app = express();
const port = 5000;

// app.use(cors())
// app.use(express.json());
// app.use(bodyParser.json());


// async function getdb() {
//   var data;
//   try {
//     await client.connect();
//     const database = client.db("products");
//     const collection = database.collection("products-list");
//     const cursor = collection.find({});
//     const documents = await cursor.toArray();
//     data=documents;
//   }
//    finally {
//     await client.close();

//   }

//   return(data);
// }


const startServer = async () => {
  const app = express();
  const server = new ApolloServer({
    typeDefs: `
        type Product {
            id: String!
            name: String!
            mrp: Float!
            image: String!
            brand: String!
        }

        type listProduct {
          name: String!
          synonyms: [String]

        }

        type Query {
            getProducts: [Product]
          
        }

    `,
    resolvers: {
      Query: {
        getProducts: () =>DATA
      }
    }
  }
  );

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(port, () => {
    console.log("Server Started at PORT 8000")
  });

}

startServer();

// app.get('/api/products...', async (req, res) => {
//   try {
//    let d =await getdb();
//    console.log(d);
//    res.json(d);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
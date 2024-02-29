const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");



const { DATA } = require('./data');

const port = 5000;



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
            suggestions: [String]
            desc: String
            synonyms:[String]
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
        getProducts: () => DATA
      }
    }
  }
  );

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(port, () => {
    console.log("Server Started at PORT 5000")


  });
console.log(DATA);
}

startServer();

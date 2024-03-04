const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");

const Fuse = require("fuse.js")


const { ProductData } = require('./Product-data');
const {UserData } =  require( './User-data.js');
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

        type User {
          id: String!
          name: String!
          email:  String!
          phone: String!
          address: String!
        }

        type Query {
            getProducts: [Product]
            getAllUsers: [User]
            getUser(id: ID!): User 
        }
        

    `,
    resolvers: {
      Query: {
        getProducts: () => ProductData,
        getAllUsers: () => UserData,
        getUser: async (parent, { id }) => await UserData.find((e) => e.id === id),
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
// console.log(DATA);
}

startServer();

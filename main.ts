import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import { Mutation } from "./resolvers/mutation.ts";
import { Query } from "./resolvers/query.ts";
import { typeDefs } from "./graphQlSchema.ts";

const MONGO_URL = Deno.env.get("MONGO_URL");

await mongoose.connect(MONGO_URL) && console.log("Conectado a la base de datos")

const resolvers = {
    Query,
    Mutation,
}
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
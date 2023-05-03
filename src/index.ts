import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import { buildSchema } from "type-graphql";
import dotenv from "dotenv";
import resolvers from "./resolvers";
import db from "./db";
import session from "express-session";
import redis from "./redis";

dotenv.config();
const PORT = process.env.SERVER_PORT;

const app = express();
const httpServer = http.createServer(app);

app.use(
  session({
    store: redis,
    name: "foodiz",
    secret: "helloheni",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
    },
  })
);
async function main() {
  await db.initialize();
  const schema = await buildSchema({ resolvers, validate: false });
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  app.use(
    "/",
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    }),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ req }),
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log("server running");
}
main();
 
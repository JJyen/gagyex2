import { MongoClient } from "mongodb";

const dbUrl = "/url";
// const options = { useNewUrlParser: true };

let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(dbUrl).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(dbUrl).connect();
}

export { connectDB };

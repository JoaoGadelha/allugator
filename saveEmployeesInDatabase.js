const { MongoClient } = require("mongodb");
require('dotenv').config();
const uri = process.env.MONGODB_URI;
let importObj = require('./convertTxtToJson.js')
let objArray = importObj.objArray;
const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true  });

async function run() {
    try {
      await client.connect();
      const database = client.db("allugator");
      const collection = database.collection("allugator");
      
      // this option prevents additional documents from being inserted if one fails
      const options = { ordered: true };
      const result = await collection.insertMany(objArray, options);
      console.log(`${result.insertedCount} documents were inserted`);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
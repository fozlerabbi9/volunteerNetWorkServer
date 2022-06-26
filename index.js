const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express')
const cors = require("cors");
const app = express()
const port = process.env.PORT || 5000;
require('dotenv').config()

app.use(cors());
app.use(express.json());

// name = volunteerNetWork
// pass = VJtGzrIJbp5bL9EK


const uri = "mongodb+srv://volunteerNetWork:VJtGzrIJbp5bL9EK@cluster0.hdkgq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run (){
  try{
    await client.connect();
    const volunteerCollection = client.db("volunteerNeetwork").collection("volunteerData");

    app.get('/volunteerData', async(req, res)=>{
      const query = {};
      const cursor = volunteerCollection.find(query);
      const volunteerData = await cursor.toArray();
      res.send(volunteerData);
    })

  }
  finally{
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello Worldddd!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

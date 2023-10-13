const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const uri = process.env.dbURL;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const coffeCollection = client.db("coffe-shop").collection("coffee");

    app.post("/coffee", async (req, res) => {
      try {
        const coffee = req.body;
        const newCoffee = await coffeCollection.insertOne(coffee);
        res.status(201).send(newCoffee);
      } catch (error) {
        console.log(error);
      }
    });

    app.get("/coffee", async (req, res) => {
      try {
        const coffees = await coffeCollection.find().toArray();
        res.status(200).send(coffees);
      } catch (error) {
        console.log(error.message);
      }
    });

    app.delete("/coffee/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const deletedItems = await coffeCollection.deleteOne(filter);
        res.status(200).send(deletedItems);
      } catch (error) {
        console.log(error);
      }
    });
    app.put("/coffee/:id", async (req, res) => {
      try {
        const { name, supplier, chef, category, details, photo, taste } =
          req.body;
        console.log(name, supplier, chef, category, details, photo, taste);
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updateCoffee = {
          $set: {
            name,
            supplier,
            chef,
            category,
            details,
            photo,
            taste,
          },
        };
        const updatedCoffee = await coffeCollection.updateOne(
          filter,
          updateCoffee,
          options
        );
        res.status(200).send(updatedCoffee);
      } catch (error) {
        console.log(error);
      }
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello this is my server ");
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

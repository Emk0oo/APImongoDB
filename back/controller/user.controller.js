const url = "mongodb://127.0.0.1:27017";
const dbName = "exoApiExpress";
const { MongoClient } = require("mongodb");

exports.getUsers = async (req, res) => {
    const client = new MongoClient(url);
    await client.connect();
    
    try {
        const db = client.db(dbName);
        const collection = db.collection("user");
        const users = await collection.find().toArray();
        res.status(200).json(users);
    } catch (e) {
        console.log(e);
        res.send(e);
    } finally {
        await client.close();
    }
    };
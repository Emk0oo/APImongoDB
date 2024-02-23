const url = "mongodb://127.0.0.1:27017";
const dbName = "exoApiExpress";
const { MongoClient } = require("mongodb");
const jwt = require("jsonwebtoken");

const jwtSecretKey = 'bdhzdhjzavdhzadzadhzauihezuaheuizaeh';

exports.auth = async (req, res) => {
  console.log("auth");
  const login = req.body.login;
  const password = req.body.password;

  const client = new MongoClient(url);
  
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("user");
    const user = await collection.findOne({ login: login });
    console.log(user);

    if (user && user.password === password) {
      // Passwords match, authentication successful
      const token = jwt.sign({ login: user.login }, jwtSecretKey, { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      // Either user not found or password incorrect
      res.status(401).json("Identifiants incorrects");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  } finally {
    // Ensure to close the connection
    await client.close();
  }
};

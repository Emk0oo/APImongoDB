const {MongoClient}= require('mongodb');
const url= 'mongodb://127.0.0.1:27017';
const dbName= 'exoApiExpress';


exports.register = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const login = req.body.login;

    const client = new MongoClient(url);
    await client.connect();

    try{
        const db= client.db(dbName);
        const collection = db.collection('user');
        const user= collection.insertOne({email, password, login});
        res.status(200).json(user);
    }
    catch(e){
        console.log(e);
        res.send(e);
    }
}

exports.getUsers = async (req, res) => {
  res.send("Hello World!");
};


module.exports = exports;

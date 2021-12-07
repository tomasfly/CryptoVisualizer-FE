const express = require('express');
const app = express();
const port = 3000;

// MongoDB stuff
const { MongoClient } = require('mongodb');

require('dotenv').config()

// The only route we have so far
app.get('/', (req, res) => {

    let options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        tls: true,
        tlsCAFile: "./ca-certificate.crt"
    }

    const uri = process.env.MONGODB_CONNECTION_STRING;
    MongoClient.connect(uri, options, (err, client) => {
        if (err) return console.log(err);
        let db = client.db('test');
        sort = {'_id': -1}
        db.collection('log').find({}).sort(sort).limit(100).toArray(function (err, results) {
            if (err) console.log(err)
            res.send(results)
            client.close()
        })
    });

});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// https://www.freecodecamp.org/news/deploy-nodejs-app-server-to-production/
// Small FE example
// node app.js

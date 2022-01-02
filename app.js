const express = require('express');
const app = express();
const port = 3000;
var path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// MongoDB stuff
const { MongoClient } = require('mongodb');

require('dotenv').config()

// The only route we have so far
app.get('/', (req, res) => {

    let options = {
        sslKey: "./ca-certificate.crt",
        sslCert: "./ca-certificate.crt"
    }

    const uri = process.env.MONGODB_CONNECTION_STRING;
    MongoClient.connect(uri, options, (err, client) => {
        if (err) return console.log(err);
        let db = client.db('test');
        sort = { '_id': -1 }
        db.collection('log').find({}).sort(sort).limit(200).toArray(function (err, results) {
            if (err) console.log(err)
            res.send(results)
            client.close()
        })
    });

});

app.get('/volume_alert_1m', (req, res) => {

    let options = {
        sslKey: "./ca-certificate.crt",
        sslCert: "./ca-certificate.crt"
    }

    const uri = process.env.MONGODB_CONNECTION_STRING;
    MongoClient.connect(uri, options, (err, client) => {
        if (err) return console.log(err);
        let db = client.db('test');
        sort = { '_id': -1 }
        let output = []
        db.collection('alerts').find({interval: "1m"}).sort(sort).limit(200).toArray(function (err, results) {
            if (err) console.log(err)

            results.forEach(element => {
                output.push({ coin: element.coin, percentageIncrement: element.percentageIncrement, interval: element.interval, time: new Date(element.timestamp) })

            });
            res.render('volume_alert_1m', { output });
            client.close()
        })
    });

});

app.get('/volume_alert_15m', (req, res) => {

    let options = {
        sslKey: "./ca-certificate.crt",
        sslCert: "./ca-certificate.crt"
    }

    const uri = process.env.MONGODB_CONNECTION_STRING;
    MongoClient.connect(uri, options, (err, client) => {
        if (err) return console.log(err);
        let db = client.db('test');
        sort = { '_id': -1 }
        let output = []
        db.collection('alerts').find({interval: "15m"}).sort(sort).limit(200).toArray(function (err, results) {
            if (err) console.log(err)

            results.forEach(element => {
                output.push({ coin: element.coin, percentageIncrement: element.percentageIncrement, interval: element.interval, time: new Date(element.timestamp) })

            });
            res.render('volume_alert_15m', { output });
            client.close()
        })
    });

});

app.get('/volume_alert_30m', (req, res) => {

    let options = {
        sslKey: "./ca-certificate.crt",
        sslCert: "./ca-certificate.crt"
    }

    const uri = process.env.MONGODB_CONNECTION_STRING;
    MongoClient.connect(uri, options, (err, client) => {
        if (err) return console.log(err);
        let db = client.db('test');
        sort = { '_id': -1 }
        let output = []
        db.collection('alerts').find({interval: "30m"}).sort(sort).limit(200).toArray(function (err, results) {
            if (err) console.log(err)

            results.forEach(element => {
                output.push({ coin: element.coin, percentageIncrement: element.percentageIncrement, interval: element.interval, time: new Date(element.timestamp) })

            });
            res.render('volume_alert_30m', { output });
            client.close()
        })
    });

});

app.get('/volume_alert_1h', (req, res) => {

    let options = {
        sslKey: "./ca-certificate.crt",
        sslCert: "./ca-certificate.crt"
    }

    const uri = process.env.MONGODB_CONNECTION_STRING;
    MongoClient.connect(uri, options, (err, client) => {
        if (err) return console.log(err);
        let db = client.db('test');
        sort = { '_id': -1 }
        let output = []
        db.collection('alerts').find({interval: "1h"}).sort(sort).limit(200).toArray(function (err, results) {
            if (err) console.log(err)

            results.forEach(element => {
                output.push({ coin: element.coin, percentageIncrement: element.percentageIncrement, interval: element.interval, time: new Date(element.timestamp) })

            });
            res.render('volume_alert_1h', { output });
            client.close()
        })
    });

});

app.get('/volume_alert_4h', (req, res) => {

    let options = {
        sslKey: "./ca-certificate.crt",
        sslCert: "./ca-certificate.crt"
    }

    const uri = process.env.MONGODB_CONNECTION_STRING;
    MongoClient.connect(uri, options, (err, client) => {
        if (err) return console.log(err);
        let db = client.db('test');
        sort = { '_id': -1 }
        let output = []
        db.collection('alerts').find({interval: "4h"}).sort(sort).limit(200).toArray(function (err, results) {
            if (err) console.log(err)

            results.forEach(element => {
                output.push({ coin: element.coin, percentageIncrement: element.percentageIncrement, interval: element.interval, time: new Date(element.timestamp) })

            });
            res.render('volume_alert_4h', { output });
            client.close()
        })
    });

});

app.get('/volume_alert_1d', (req, res) => {

    let options = {
        sslKey: "./ca-certificate.crt",
        sslCert: "./ca-certificate.crt"
    }

    const uri = process.env.MONGODB_CONNECTION_STRING;
    MongoClient.connect(uri, options, (err, client) => {
        if (err) return console.log(err);
        let db = client.db('test');
        sort = { '_id': -1 }
        let output = []
        db.collection('alerts').find({interval: "1d"}).sort(sort).limit(200).toArray(function (err, results) {
            if (err) console.log(err)

            results.forEach(element => {
                output.push({ coin: element.coin, percentageIncrement: element.percentageIncrement, interval: element.interval, time: new Date(element.timestamp) })

            });
            res.render('volume_alert_1d', { output });
            client.close()
        })
    });

});

app.get('/rsi_one_hour', (req, res) => {

    let options = {
        sslKey: "./ca-certificate.crt",
        sslCert: "./ca-certificate.crt"
    }

    const uri = process.env.MONGODB_CONNECTION_STRING;
    MongoClient.connect(uri, options, (err, client) => {
        if (err) return console.log(err);
        let db = client.db('test');
        sort = { 'rsi': 1 }
        let output = []
        db.collection('rsi').find({ interval: "1h" }).sort(sort).limit(500).toArray(function (err, results) {
            if (err) console.log(err)

            results.forEach(element => {
                output.push({ coin: element.coin, rsi: element.rsi, interval: element.interval, time: new Date() })
            });
            res.render('rsi_one_hour', { output });
            client.close()
        })
    });

});

app.get('/rsi_five_minutes', (req, res) => {

    let options = {
        sslKey: "./ca-certificate.crt",
        sslCert: "./ca-certificate.crt"
    }

    const uri = process.env.MONGODB_CONNECTION_STRING;
    MongoClient.connect(uri, options, (err, client) => {
        if (err) return console.log(err);
        let db = client.db('test');
        sort = { 'rsi': 1 }
        let output = []
        db.collection('rsi').find({ interval: "5m" }).sort(sort).limit(500).toArray(function (err, results) {
            if (err) console.log(err)

            results.forEach(element => {
                output.push({ coin: element.coin, rsi: element.rsi, interval: element.interval, time: new Date() })
            });
            res.render('rsi_five_minutes', { output });
            client.close()
        })
    });

});

app.get('/rsi_fifteen_minutes', (req, res) => {

    let options = {
        sslKey: "./ca-certificate.crt",
        sslCert: "./ca-certificate.crt"
    }

    const uri = process.env.MONGODB_CONNECTION_STRING;
    MongoClient.connect(uri, options, (err, client) => {
        if (err) return console.log(err);
        let db = client.db('test');
        sort = { 'rsi': 1 }
        let output = []
        db.collection('rsi').find({ interval: "15m" }).sort(sort).limit(500).toArray(function (err, results) {
            if (err) console.log(err)

            results.forEach(element => {
                output.push({ coin: element.coin, rsi: element.rsi, interval: element.interval, time: new Date() })
            });
            res.render('rsi_fifteen_minutes', { output });
            client.close()
        })
    });

});

app.get('/smas_difference_one_day', (req, res) => {

    let options = {
        sslKey: "./ca-certificate.crt",
        sslCert: "./ca-certificate.crt"
    }

    const uri = process.env.MONGODB_CONNECTION_STRING;
    MongoClient.connect(uri, options, (err, client) => {
        if (err) return console.log(err);
        let db = client.db('test');
        sort = { 'smaDifference': 1 }
        let output = []
        db.collection('sma').find({ interval: "1d" }).sort(sort).limit(500).toArray(function (err, results) {
            if (err) console.log(err)

            results.forEach(element => {                
                output.push({ coin: element.coin, smaDifference: element.smaDifference, interval: element.interval, time: new Date() })
            });
            res.render('smas_difference_one_day', { output });
            client.close()
        })
    });

});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// https://www.freecodecamp.org/news/deploy-nodejs-app-server-to-production/
// Small FE example
// node app.js

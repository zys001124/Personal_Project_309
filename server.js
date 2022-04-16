/* server.js - Express server*/
'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '/pub')))

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, './pub/pages/home.html'));
})

app.get('/home', (req, res) => {

    res.sendFile(path.join(__dirname, './pub/pages/home.html'));
})

app.get('/mocks', (req, res) => {

    res.sendFile(path.join(__dirname, './pub/pages/mocks.html'));
})


app.get('/examples', (req, res) => {

    res.sendFile(path.join(__dirname, './pub/pages/examples.html'));
})

app.get('/documentation', (req, res) => {

    res.sendFile(path.join(__dirname, './pub/pages/documentation.html'));
})


const port = process.env.PORT || 3000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
}) 
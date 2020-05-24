/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 80;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
let routes = require('./api/routes') //importing route
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port);
console.log('API server started on: ' + port);
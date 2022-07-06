//REQUIRE DEPENDENCIES
const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config() 

//SET UP DATABASE VARIABLES
let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'superdevs',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log(`Connected to ${dbName} database.`)
        db = client.db(dbName)
        collection = db.collection('superdevs')
    })
//VARIABLES FOR SETTING MIDDLEWEAR
app.set('view engine', 'ejs') 
app.use(express.static('public')) //all client side files 
app.use(express.urlencoded({extended:true})) //parse urls that are being sent back and forth
app.use(express.json()) //help express parse and read that data sent
app.use(cors())



app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port.`)
})

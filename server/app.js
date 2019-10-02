const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const cors = require('cors')

const schema = require('./schema/schema')

const app = express()

// allow cross-origin requests
app.use(cors())

// connect to db
mongoose.connect('mongodb+srv://joice:Joicejoice7@graphql-tc5cw.mongodb.net/test')
mongoose.connection.once('open', () => {
  console.log('connected to database')
})


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('Now Listing for requests on port 4000')
})
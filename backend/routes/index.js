const connectToMongo = require('./db');
const express = require('express')
connectToMongo();

const app = express()
const port = 3000

// avilable routes

app.get('/api/auth', require('./routes/auth'))
app.get('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
    res.send('Jai Shree Ram')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

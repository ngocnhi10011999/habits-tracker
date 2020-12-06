const config = require('./utils/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const habitRouter = require('./routers/habitRouter')
const dateRouter = require('./routers/dateRouter')
const authRouter = require('./routers/authRouter')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')

db = "mongodb+srv://ngocnhi:10011999@cluster0.mikhc.mongodb.net/habitdb?retryWrites=true&w=majority"
// mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch(err => console.log(err, 'Can not connect MongoDB'));


app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())

app.use(middleware.tokenExtractor)

app.use('/api/habits', habitRouter)
app.use('/api/dates', dateRouter)
app.use('/api/auth', authRouter)

module.exports = app

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port  http://localhost:${PORT}`));


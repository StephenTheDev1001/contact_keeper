const express = require('express')
require('dotenv').config();
const connectDB = require('./config/db')

const app = express();

// Connect Database
connectDB()

// init middleware
app.use(express.json({ extended: false }))

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
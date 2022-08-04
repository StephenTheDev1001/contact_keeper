const express = require('express')
require('dotenv').config();

const app = express();

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
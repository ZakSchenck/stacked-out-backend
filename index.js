require('dotenv').config();
const express = require('express');
const app = express();
const listing = require('./routes/listing')
app.use(express.json());
const cors = require('cors')

app.use(cors())

app.use("/api/v1/listings", listing)

app.listen(process.env.PORT || 4000, console.log('we are running on port 4000'))
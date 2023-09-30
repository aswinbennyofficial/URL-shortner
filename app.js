const express = require('express');
// intialise express
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json({extended: false}));

// Define the port on which the server will run
const PORT=5000;

// Import the function to connect to the MongoDB database
const connectDB = require('./config/db');


// connect to mongodb
connectDB();


//Defining routes
// Routes for the root path '/' are defined in './routes/index.js' for decoding
app.use('/', require('./routes/index'));
// Routes for '/api/url' are defined in './routes/url.js' for encoding
app.use('/api/url', require('./routes/url'));





app.get('/', (req, res) => {
    res.send('Hello World!')
  })



app.listen(PORT,() =>{
    console.log(`app is running in port ${PORT}`);
})
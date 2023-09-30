const express = require('express');
// intialise express
const app = express();
app.use(express.json({extended: false}));
const PORT=5000;

const connectDB = require('./config/db');

// connect to mongodb
connectDB();


app.get('/', (req, res) => {
    res.send('Hello World!')
  })



app.listen(PORT,() =>{
    console.log(`app is running in port ${PORT}`);
})
const mongoose = require('mongoose');
require('dotenv').config();

// taking value from MONGO_URI in.env
const MONGO_URI = process.env.MONGO_URI;


const connectDB = async () => {
    try{

        await mongoose.connect(MONGO_URI);
        console.log('MongoDb connected...');

    }catch(err){
        console.error(err.message);
        process.exit(1);

    }
}


module.exports=connectDB;
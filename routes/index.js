const express = require('express');
const router = express.Router();
const Url = require('../models/urlSchema');

// GET  /:code redirect to long url

router.get('/:code', async ( req,res )=>{
    try{
        // Attempt to find a document in the 'urls' collection
        // where the 'urlCode' matches the ':code' parameter in the URL
        const url = await Url.findOne({ urlCode: req.params.code });
        
        if(url){

            // If a matching document is found, perform a URL redirection
            // by sending an HTTP redirect response to the 'longUrl'
            return res.redirect(url.longUrl);

        } 
        else{
            // If no matching document is found, return a 404 error response
            return res.status(404).json('No url found');
        }

    }catch(err){
        // If an error occurs during the process, log the error
        // and return a 500 (Internal Server Error) response
        console.error(err);
        res.status(500).json('Server error');
    }
});

module.exports = router;
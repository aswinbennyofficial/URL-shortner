const express = require('express');
const router =express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
require('dotenv').config();

const Url = require('./../models/urlSchema');

// taking value from MONGO_URI in.env
const BASE_URL = process.env.BASE_URL;

// POST /api/url/shorten
// Create short Url
router.post('/shorten', async (req,res) =>{
    // Extract the long URL from the request body
    const { longUrl } = req.body;

    // check if base url is valid url
    if(!validUrl.isUri(BASE_URL)){
        return res.status(401).json('Invalid base url');
    }


    // Create a unique URL code using the shortid library
    const urlCode = shortid.generate();


    // check if requested url is valid url
    if(validUrl.isUri(longUrl)){

        try{
            // Try to find if long URL is already saved or not
            let url = await Url.findOne({ longUrl });

            if(url){
                // If the URL document already exists, return it as a response
                res.json(url);
            }
            else{
                // If the URL document does not exist, create a new short URL
                const shortUrl = BASE_URL + '/' + urlCode;
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()

                });

                // Save the new URL document to the collection
                await url.save();

                // Return the newly created URL document as a response
                return res.json(url);
            }
        }
        catch(err){
            console.error(err);  
            res.status(500).json('Server error');
        }

    }else{
        // If the requested long URL is invalid, return an error response
        res.status(401).json('invalid long url');
    }
    
});

module.exports = router;
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
    const { longUrl } = req.body;

    // check if base url is valid url
    if(!validUrl.isUri(BASE_URL)){
        return res.status(401).json('Invalid base url');
    }


    // Create url code
    const urlCode = shortid.generate();


    // check if requested url is valid url
    if(validUrl.isUri(longUrl)){

        try{
            let url = await Url.findOne({ longUrl });

            if(url){
                res.json(url);
            }
            else{
                const shortUrl = BASE_URL + '/' + urlCode;
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()

                });

                await url.save();
            }
        }
        catch(err){
            console.error(err);  
            res.status(500).json('Server error');
        }

    }else{
        res.status(401).json('invalid long url');
    }
    
});

module.exports = router;
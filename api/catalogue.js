var express = require('express');
var router = express.Router();

const smoothieModel = require("../model/smoothie");

const {
    check,
    validationResult
} = require('express-validator');


/* GET users listing. */
var router = express.Router();

router.post('/add', async (req, res, next) => {

    //console.log('req.body', req.body);
/*     
    let newSmoothie = new smoothieModel();
    newSmoothie.titre = req.body.titre;
    newSmoothie.recommendations = req.body.recommendations;
    newSmoothie.description = req.body.description;
    newSmoothie.ingredients = req.body.ingredients;
    newSmoothie.features = req.body.features;
    newSmoothie.deroulement = req.body.deroulement;
    newSmoothie.photo = req.body.photo;
    try {
        const smoothie = await newSmoothie.create(req.body, function(err, item));
        //const smoothie = await newSmoothie.save();
        //res.send(smoothie);
    } catch(err) {
        res.status(400).send(err);
    } */
    
    const smoothie = await smoothieModel.create(req.body, function(err, item){
        if (err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.send(item);    // echo the result back
        }
    });
});

router.get('/smoothie', async (req, res, next) => {

    try {
        const smoothies = await smoothieModel.find({});
        //console.log(smoothies);
        res.send(smoothies);
        
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.get('/test/:id', async (req, res, next) => {

    var id = req.params.id;

    try {
        const smoothies = await smoothieModel.findById(id);
        //console.log(smoothies);
        res.send(smoothies);
        
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});



module.exports = router;

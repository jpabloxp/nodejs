var express = require('express');
var router = express.Router();

const smoothieModel = require("../model/smoothie");

/* GET users listing. */
var router = express.Router();
router.get('/smoothie', async (req, res, next) => {

    try {
        const smoothies = await smoothieModel.find({});
        console.log(smoothies);
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
        console.log(smoothies);
        res.send(smoothies);
        
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

module.exports = router;

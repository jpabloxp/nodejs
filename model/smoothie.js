const mongoose = require("mongoose");

const smoothieSchema = mongoose.Schema(
    {
        titre : {
            type: String,
            required: true
        },
        ingredients : [
            {
                nom : {
                    type: String,
                    required: true
                },
                quantite : {
                    type: String,
                    required: true
                }
            }
        ],
        features : [
            {
                cout : {
                    type: String,
                    required: true
                },
                tempsPreparation : {
                    type: String,
                    required: true
                }
            }
        ],
        recommendations : {
            type: String,
            required: false
        },
        description : {
            type: String,
            required: false
        },
        deroulement : {
            type: String,
            required: true
        },
        photo : [
            {
                title : {
                    type: String,
                    required: true
                },
                path : {
                    type: String,
                    required: true
                },
                description : {
                    type: String,
                    required: false
                }
            }
        ]
    }
);

const smoothieModel = module.exports = mongoose.model('smoothies', smoothieSchema);
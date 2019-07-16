const mongoose = require("mongoose");

const smoothieSchema = mongoose.Schema(
    {
        titre : {
            type: String,
            required: false
        },
        ingredients : [
            {
                nom : {
                    type: String,
                    required: false
                },
                quantite : {
                    type: String,
                    required: false
                }
            }
        ],
        features : [
            {
                cout : {
                    type: String,
                    required: false
                },
                tempsPreparation : {
                    type: String,
                    required: false
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
        deroulement : [
            {
                pas : {
                    type: String,
                    required: false
                }
            }
        ],
        photo : [
            {
                title : {
                    type: String,
                    required: false
                },
                path : {
                    type: String,
                    required: false
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
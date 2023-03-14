const mongoose  = require("mongoose")

const MarvelSchema = mongoose.Schema({

    data: {type:String}

},
    {collection: "marvel"}
)

module.exports = mongoose.model("Marvelmodel", MarvelSchema)
const mongoose = require("mongoose")

const conexionDB = () =>{
    mongoose.connect(process.env.DB)
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch(err => console.log(err));
}

module.exports = conexionDB
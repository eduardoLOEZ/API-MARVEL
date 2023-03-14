const express = require("express")
const cors = require("cors")
require("dotenv").config()
const Marvelmodel = require("./DB/Marvelmodel")
const conexionDB=  require("./DB/database")

const port = 8000
const app = express()


//funcion para obtener los personajes del JSON


//middlewares 
app.use(cors())
app.use(express.json())


//ruta principal 
app.get("/marvel/personajes", async (req, res) =>{
   // res.send(personajesAPI())
    const data = await Marvelmodel.find()
    res.send(data)
})


//conexion a mongodb
conexionDB()




app.listen(port, () => {
    console.log("running server")
})



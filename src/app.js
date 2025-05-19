const express = require ("express") // importar metodos para creación de api
require('dotenv').config();
const helmet = require('helmet') // metodo en conjunto de express para proteger el consumo de api
const bodyParser = require('body-parser') // metodo para asignar cuerpo de una petición mediante JSON
const cors = require('cors') // metodo para proteger y permitir recursos mediante HTTP
const port = process.env.PORT || 3000 // condicionar la varibale port para que se obtenga primero el valor en las variables de entorno

//asignar ruta a una variable
const OcrRoute = require('./routes/ocr.routes')
const UserRoute = require('./routes/usuario.routes')

const app = express()
app.use(helmet())
app.use(cors())
app.use(bodyParser.json({limit: '35mb'}));

// cambiar body-parser por express.bodyparser 
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

app.use(express.static('./public'))

app.get("/", (req, res) =>{
    res.send("Hello Word!")
})

// habilitar y unir las rutas
app.use('/v1/api/ocr', OcrRoute)
app.use('/v1/api/ocr/user', UserRoute)


// escuchar el puerto de conexión e imprimirlo por consola
app.listen(port, ()=> {
    console.log("server running on port", port);
})

module.exports = app
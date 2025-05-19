const ocrController = require('../controllers/ocr.controller.js') // importar el controlador de caracteristica
const express = require('express') //importar los metodos de la librería express para creación de API 
const router = express.Router()
const {checkSession} = require("../middlewares/origin.js")

// Asignar una metodo y una ruta a un controlador, y así consumir el endpoint 
// router.post('/createCompetencia', checkSession, ocrController.createCompetencia)
router.post('/createCompetencia', ocrController.createCompetencia)
router.post('/createCategoria', ocrController.createCategoria)
router.post('/createAtleta', ocrController.createAtleta)
router.post('/createOleada', ocrController.createOleada)

router.post('/updateAtleta', ocrController.updateAtleta)
router.post('/asignarTiempoAtleta', ocrController.asignarTiempoAtleta)
router.post('/updateCompetencia', ocrController.updateCompetencia)
router.post('/updateCategoria', ocrController.updateCategoria)
router.post('/updateOleada', ocrController.updateOleada)
router.post('/cambiarAprobadoLiga', ocrController.cambiarAprobadoLiga)
router.post('/cambiarAprobado', ocrController.cambiarAprobado)

router.post('/darLlegadaAtleta', ocrController.darLlegadaAtleta)
router.post('/enviarEmail', ocrController.enviarEmail)

router.post('/getCompetencia', ocrController.getCompetencia)
router.post('/getCompetenciaById', ocrController.getCompetenciaById)
router.post('/getCategoria', ocrController.getCategoria)
router.post('/getCategoriaById', ocrController.getCategoriaById)
router.post('/getCategoriaByCompetencia', ocrController.getCategoriaByCompetencia)
router.post('/getAtleta', ocrController.getAtleta)
router.post('/getAtletaById', ocrController.getAtletaById)
router.post('/getAtletaByCompetencia', ocrController.getAtletaByCompetencia)
router.post('/getOleadaByCompetencia', ocrController.getOleadaByCompetencia)

router.post('/getCompetenciasPorAprobar', ocrController.getCompetenciasPorAprobar)
router.post('/getCompetenciasPorAprobarLiga', ocrController.getCompetenciasPorAprobarLiga)
router.post('/getCompetenciasInicio', ocrController.getCompetenciasInicio)
router.post('/getCompetenciasFinalizadas', ocrController.getCompetenciasFinalizadas)
router.post('/getCategoriaByCompetenciaId', ocrController.getCategoriaByCompetenciaId)
router.post('/getCountAtletasByCompetencia', ocrController.getCountAtletasByCompetencia)


module.exports = router
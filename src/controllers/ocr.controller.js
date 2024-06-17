const sequelize = require('../conection') // importar la clase par la conexión de la base datos
const moment = require('moment');

// Metodo para obtener de la base de datos todas los profesionales
const getCompetencia = async (req, res) =>{
    try {
        const {tenant} = req.body
        if(tenant == 'OCR-TENANT'){
            const competencia = await sequelize.query('SELECT * FROM competencia', {type: sequelize.QueryTypes.SELECT})
            // res.status(200).json({usaurios})
            res.status(200).json({
                message: 'Todas las comeptencias',
                response: 'OK',
                competencia
            })
        }else{
            res.status(404).json({
                'response': 'error',
                'description': 'Tenant incorrecto',
            })
        }
    } catch (error) {
        if (error.name) {
            res.status(404).json({
                error,
                message: 'error en la búsqueda ' + error
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado ' + error,
                response : 'ERROR'
            })
        }
    }
}

const getCompetenciaById = async (req, res) =>{
    try {
        const {id, tenant} = req.body
        if(tenant == 'OCR-TENANT'){
            const competencia = await sequelize.query(`SELECT * FROM competencia 
            WHERE id = ${id}`,
            { type: sequelize.QueryTypes.SELECT })

            console.log("competencia", competencia)

            res.status(200).json({
                message: 'Competencia por ID: ' + id,
                response: 'OK',
                competencia,
            })
        }else{
            res.status(404).json({
                'response': 'error',
                'description': 'Tenant incorrecto',
            })
        }
    } catch (error) {
        if (error.name) {
            res.status(404).json({
                error,
                message: 'error en la búsqueda ' + error
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado ' + error,
                response : 'ERROR'
            })
        }
    }
}

// Metodo para obtener de la base de datos todas los categorias
const getCategoria = async (req, res) =>{
    try {
        const {tenant} = req.body
        if(tenant == 'OCR-TENANT'){
            const categoria = await sequelize.query('SELECT * FROM categoria', {type: sequelize.QueryTypes.SELECT})
            // res.status(200).json({usaurios})
            res.status(200).json({
                message: 'Todas las categorías',
                response: 'OK',
                categoria
            })
        }else{
            res.status(404).json({
                'response': 'error',
                'description': 'Tenant incorrecto',
            })
        }
    } catch (error) {
        if (error.name) {
            res.status(404).json({
                error,
                message: 'error en la búsqueda ' + error
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado ' + error,
                response : 'ERROR'
            })
        }
    }
}

const getCategoriaById = async (req, res) =>{
    try {
        const {id, tenant} = req.body
        if(tenant == 'OCR-TENANT'){
            const categoria = await sequelize.query(`SELECT * FROM categoria
            WHERE id = ${id}`,
            { type: sequelize.QueryTypes.SELECT })

            console.log("categoria", categoria)

            res.status(200).json({
                message: 'Categoría por ID: ' + id,
                response: 'OK',
                categoria,
            })
        }else{
            res.status(404).json({
                'response': 'error',
                'description': 'Tenant incorrecto',
            })
        }
    } catch (error) {
        if (error.name) {
            res.status(404).json({
                error,
                message: 'error en la búsqueda ' + error
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado ' + error,
                response : 'ERROR'
            })
        }
    }
}

// Metodo para obtener de la base de datos todas los categorias
const getAtleta = async (req, res) =>{
    try {
        const {tenant} = req.body
        if(tenant == 'OCR-TENANT'){
            const atleta = await sequelize.query('SELECT * FROM atleta', {type: sequelize.QueryTypes.SELECT})
            // res.status(200).json({usaurios})
            res.status(200).json({
                message: 'Todas los atletas',
                response: 'OK',
                atleta
            })
        }else{
            res.status(404).json({
                'response': 'error',
                'description': 'Tenant incorrecto',
            })
        }
    } catch (error) {
        if (error.name) {
            res.status(404).json({
                error,
                message: 'error en la búsqueda ' + error
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado ' + error,
                response : 'ERROR'
            })
        }
    }
}

const getAtletaById = async (req, res) =>{
    try {
        const {id, tenant} = req.body
        if(tenant == 'OCR-TENANT'){
            const atleta = await sequelize.query(`SELECT * FROM atleta
            WHERE id = ${id}`,
            { type: sequelize.QueryTypes.SELECT })

            console.log("atleta", atleta)

            res.status(200).json({
                message: 'Atleta por ID: ' + id,
                response: 'OK',
                atleta,
            })
        }else{
            res.status(404).json({
                'response': 'error',
                'description': 'Tenant incorrecto',
            })
        }
    } catch (error) {
        if (error.name) {
            res.status(404).json({
                error,
                message: 'error en la búsqueda ' + error
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado ' + error,
                response : 'ERROR'
            })
        }
    }
}

const getAtletaByCompetencia = async (req, res) =>{
    try {
        const {id, tenant} = req.body
        if(tenant == 'OCR-TENANT'){
            const atleta = await sequelize.query(`SELECT * FROM atleta
            WHERE competencia_id = ${id}`,
            { type: sequelize.QueryTypes.SELECT })

            console.log("atleta", atleta)

            res.status(200).json({
                message: 'Atleta por ID: ' + id,
                response: 'OK',
                atleta,
            })
        }else{
            res.status(404).json({
                'response': 'error',
                'description': 'Tenant incorrecto',
            })
        }
    } catch (error) {
        if (error.name) {
            res.status(404).json({
                error,
                message: 'error en la búsqueda ' + error
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado ' + error,
                response : 'ERROR'
            })
        }
    }
}

const getCompetenciasInicio = async (req, res) =>{
    try {
        const {tenant} = req.body
        if(tenant == 'OCR-TENANT'){
            const competencia = await sequelize.query(`SELECT * FROM competencia
            WHERE estado = 'INICIO'`,
            { type: sequelize.QueryTypes.SELECT })

            console.log("competencia", competencia)

            res.status(200).json({
                message: 'Competencia con estado INICIO',
                response: 'OK',
                competencia,
            })
        }else{
            res.status(404).json({
                'response': 'error',
                'description': 'Tenant incorrecto',
            })
        }
    } catch (error) {
        if (error.name) {
            res.status(404).json({
                error,
                message: 'error en la búsqueda ' + error
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado ' + error,
                response : 'ERROR'
            })
        }
    }
}

const getCategoriaByCompetenciaId = async (req, res) =>{
    try {
        const {idCompetencia, tenant} = req.body
        if(tenant == 'OCR-TENANT'){
            const categoria = await sequelize.query(`SELECT * FROM categoria
            WHERE id_competencia = ${idCompetencia}`,
            { type: sequelize.QueryTypes.SELECT })

            console.log("categoria por idComptencia" + idCompetencia, categoria)

            res.status(200).json({
                message: 'Categoría con id Competencia: ' + idCompetencia,
                response: 'OK',
                categoria,
            })
        }else{
            res.status(404).json({
                'response': 'error',
                'description': 'Tenant incorrecto',
            })
        }
    } catch (error) {
        if (error.name) {
            res.status(404).json({
                error,
                message: 'error en la búsqueda ' + error
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado ' + error,
                response : 'ERROR'
            })
        }
    }
}

const getCountAtletasByCompetencia = async (req, res) =>{
    try {
        const {idCompetencia, tenant} = req.body
        if(tenant == 'OCR-TENANT'){
            const atletas = await sequelize.query(`SELECT * FROM atleta
            WHERE competencia_id = ${idCompetencia}`,
            { type: sequelize.QueryTypes.SELECT })

            console.log("Atletas por idComptencia" + idCompetencia, atletas)

            res.status(200).json({
                message: 'Atletas con id Competencia: ' + idCompetencia,
                response: 'OK',
                atletas,
            })
        }else{
            res.status(404).json({
                'response': 'error',
                'description': 'Tenant incorrecto',
            })
        }
    } catch (error) {
        if (error.name) {
            res.status(404).json({
                error,
                message: 'error en la búsqueda ' + error
            })
        } else {
            res.status(500).json({
                error,
                message : 'Error inesperado ' + error,
                response : 'ERROR'
            })
        }
    }
}

// **************************************************
// ********************* CREATE *********************
// **************************************************

// Metodo para crear una Categoria
const createCategoria = async (req, res) =>{
    const {nombre, descripcion, idCompetencia, tenant} = req.body
    console.log("req.body create categ", req.body);
    if(tenant == 'OCR-TENANT'){
        let arrayInsert = [`${nombre}`, `${descripcion}`, `${idCompetencia}`]
        
        try {
            const result = await sequelize.query('INSERT INTO categoria (nombre, descripcion, id_competencia) VALUES( ?, ?, ?)',
            {replacements: arrayInsert , type: sequelize.QueryTypes.INSERT })
            res.status(200).json({
                message: 'Categoría Creada!',
                response: 'OK',
                result
            })
        } catch (error) {
            if (error.name) {
                res.status(400).json({
                    error,
                    message : 'error en la creación',
                    response : 'ERROR'
                })
            } else {
                res.status(500).json({
                    error,
                    message : 'Error inesperado',
                    response : 'ERROR'
                })
            }
        }
    }else{
        res.status(404).json({
            'response': 'error',
            'description': 'Tenant incorrecto',
        })
    }
}

// Metodo para crear una competencia
const createCompetencia = async (req, res) =>{
    const {id, nombre, lugar, direccion, organizador, celular_organizador, documento_organizador, email_organizador, fecha, estado, tenant} = req.body
    console.log("req.body create compet", req.body);
    if(tenant == 'OCR-TENANT'){
        let arrayInsert = [`${nombre}`, `${lugar}`, `${direccion}`, `${organizador}`, `${celular_organizador}`, `${documento_organizador}`, `${email_organizador}`, `${fecha}`, `${estado}`]
        
        try {
            const result = await sequelize.query('INSERT INTO competencia (nombre, lugar, direccion, organizador, celular_organizador, documento_organizador, email_organizador, fecha, estado) VALUES( ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            {replacements: arrayInsert , type: sequelize.QueryTypes.INSERT })
            res.status(200).json({
                message: 'Competencia Creada!',
                response: "OK",
                result
            })
        } catch (error) {
            if (error.name) {
                res.status(400).json({
                    error,
                    message : 'error en la creación',
                    response : 'ERROR'
                })
            } else {
                res.status(500).json({
                    error,
                    message : 'Error inesperado',
                    response : 'ERROR'
                })
            }
        }
    }else{
        res.status(404).json({
            'response': 'error',
            'description': 'Tenant incorrecto',
        })
    }
}

// Metodo para crear una Atleta
const createAtleta = async (req, res) =>{
    const {nombre, celular, documento, email, categoria_id, competencia_id, no_atleta, tenant} = req.body
    console.log("req.body create Atleta", req.body);
    if(tenant == 'OCR-TENANT'){
        let arrayInsert = [`${nombre}`, `${celular}`, `${documento}`, `${email}`, `${categoria_id}`, `${competencia_id}`, `${no_atleta}`, null]
        
        try {
            const result = await sequelize.query('INSERT INTO atleta (nombre, celular, documento, email, categoria_id, competencia_id, no_atleta, tiempo_competencia) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)',
            {replacements: arrayInsert , type: sequelize.QueryTypes.INSERT })
            res.status(200).json({
                message: 'Atleta Creado!',
                response: 'OK',
                result
            })
        } catch (error) {
            if (error.name) {
                res.status(400).json({
                    error,
                    message : 'error en la creación',
                    response : 'ERROR'
                })
            } else {
                res.status(500).json({
                    error,
                    message : 'Error inesperado',
                    response : 'ERROR'
                })
            }
        }
    }else{
        res.status(404).json({
            'response': 'error',
            'description': 'Tenant incorrecto',
        })
    }
}


const darLlegadaAtleta = async (req, res) =>{
    const { no_atleta, id_categoria, tenant} = req.body
    const timestamp = moment(new Date(Date.now())).format('yyyy-MM-DD HH:mm:ss.SSS-05:00');
    
    if(tenant == 'OCR-TENANT'){
        try {
            const atleta = await sequelize.query(`SELECT * FROM atleta
            WHERE categoria_id = ${id_categoria} AND no_atleta = ${no_atleta}`,
            { type: sequelize.QueryTypes.SELECT })

            console.log("atleta", atleta);
            if(atleta[0]?.tiempo_competencia != null){
                res.status(200).json({
                    message: 'El atleta ya registró tiempo',
                    response: 'WARNING',
                    atleta
                })
            }else{
                const result = await sequelize.query(`UPDATE atleta 
                SET tiempo_competencia = "${timestamp}"       
                WHERE categoria_id = ${id_categoria} AND no_atleta = ${no_atleta}`,
                { type: sequelize.QueryTypes.INSERT })
                res.status(200).json({
                    message: 'atelta actualizado con éxito!',
                    response: 'OK',
                    result,
                })
            }

            

        } catch (error) {
            if (error.name) {
                res.status(400).json({
                    error,
                    message: 'error en la actualización',
                    response : 'ERROR'
                })
            } else {
                res.status(500).json({
                    error,
                    message : 'Error inesperado',
                    response : 'ERROR'
                })
            }
        }
    }else{
        res.status(404).json({
            'response': 'error',
            'description': 'Tenant incorrecto',
        })
    }
}


// exponer los metodos a la clase de routes
exports.getCompetencia = getCompetencia
exports.getCompetenciaById = getCompetenciaById
exports.getCategoria = getCategoria
exports.getCategoriaById = getCategoriaById
exports.getAtleta = getAtleta
exports.getAtletaById = getAtletaById
exports.getAtletaByCompetencia = getAtletaByCompetencia

exports.getCompetenciasInicio = getCompetenciasInicio
exports.getCategoriaByCompetenciaId = getCategoriaByCompetenciaId
exports.getCountAtletasByCompetencia = getCountAtletasByCompetencia

exports.createCompetencia = createCompetencia
exports.createCategoria = createCategoria
exports.createAtleta = createAtleta

exports.darLlegadaAtleta = darLlegadaAtleta

const sequelize = require('../conection') // importar la clase par la conexión de la base datos
const moment = require('moment');
const nodemailer = require("nodemailer");
const fs = require('fs');
const path = require('path');

// Leer la plantilla HTML
const templateIncripcion = path.join(__dirname, '../emailInscripcion.html');
let htmlTemplateIncripcion = fs.readFileSync(templateIncripcion, 'utf8');

// Leer la plantilla HTML
const templateRegistro = path.join(__dirname, '../emailRegistro.html');
let htmlTemplateRegistro = fs.readFileSync(templateRegistro, 'utf8');

const transporter = nodemailer.createTransport({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
    },
  });

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

const getCategoriaByCompetencia = async (req, res) =>{
    try {
        const {idCompetencia, tenant} = req.body
        if(tenant == 'OCR-TENANT'){
            const categoria = await sequelize.query(`SELECT * FROM categoria
            WHERE id_competencia = ${idCompetencia}`,
            { type: sequelize.QueryTypes.SELECT })

            console.log("categoria", categoria)

            res.status(200).json({
                message: 'Categoría por competencia: ' + idCompetencia,
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
            WHERE id_competencia = ${id}`,
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

            console.log("competencia Inicio", competencia)

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

const getCompetenciasPorAprobar = async (req, res) =>{
    try {
        const {tenant} = req.body
        if(tenant == 'OCR-TENANT'){
            const competencia = await sequelize.query(`SELECT * FROM competencia
            WHERE aprobado is null`,
            { type: sequelize.QueryTypes.SELECT })

            console.log("competencia sin aprobar", competencia)

            res.status(200).json({
                message: 'Competencia sin aprobar',
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

const getCompetenciasPorAprobarLiga = async (req, res) =>{
    try {
        const {tenant} = req.body
        if(tenant == 'OCR-TENANT'){
            const competencia = await sequelize.query(`SELECT * FROM competencia
            WHERE oficialLiga is null`,
            { type: sequelize.QueryTypes.SELECT })

            console.log("competencia sin aprobar", competencia)

            res.status(200).json({
                message: 'Competencia sin aprobar',
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

const getCompetenciasFinalizadas = async (req, res) =>{
    try {
        const {tenant} = req.body
        if(tenant == 'OCR-TENANT'){
            const competencia = await sequelize.query(`SELECT * FROM competencia
            WHERE estado = 'FINALIZADA'`,
            { type: sequelize.QueryTypes.SELECT })

            console.log("competencia Final", competencia)

            res.status(200).json({
                message: 'Competencia con estado FINALIZADA',
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
            WHERE id_competencia = ${idCompetencia}`,
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

const getOleadaByCompetencia = async (req, res) =>{
    try {
        const {idCompetencia, tenant} = req.body
        if(tenant == 'OCR-TENANT'){
            const oleadas = await sequelize.query(`SELECT * FROM oleada
            WHERE id_competencia = ${idCompetencia}`,
            { type: sequelize.QueryTypes.SELECT })

            console.log("oleada", oleadas)

            res.status(200).json({
                message: 'Oleada por competencia: ' + idCompetencia,
                response: 'OK',
                oleadas,
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
    const {nombre, descripcion, no_oleada, idCompetencia, tenant} = req.body
    console.log("req.body create categ", req.body);
    if(tenant == 'OCR-TENANT'){
        let arrayInsert = [`${nombre}`, `${descripcion}`, null, `${idCompetencia}`]
        
        try {
            const result = await sequelize.query('INSERT INTO categoria (nombre, descripcion, no_oleada, id_competencia) VALUES( ?, ?, ?, ?)',
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
    const {id, nombre, departamento, municipio, direccion, fecha, id_usuario, estado, oficialLiga, tenant} = req.body
    console.log("req.body create compet", req.body);
    if(tenant == 'OCR-TENANT'){
        let arrayInsert = [`${nombre}`, `${departamento}`,`${municipio}`, `${direccion}`, `${fecha}`,`${id_usuario}`, `${estado}`, `${oficialLiga}`]
        
        try {
            let result = null;
            if(oficialLiga == 1){
                result = await sequelize.query('INSERT INTO competencia (nombre, departamento, municipio, direccion, fecha, id_usuario, estado, oficialLiga) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)',
                {replacements: arrayInsert , type: sequelize.QueryTypes.INSERT })
            }else{
                result = await sequelize.query('INSERT INTO competencia (nombre, departamento, municipio, direccion, fecha, id_usuario, estado) VALUES( ?, ?, ?, ?, ?, ?, ?)',
                {replacements: arrayInsert , type: sequelize.QueryTypes.INSERT })
            }
            
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

// Metodo para crear una Competencia
const updateCompetencia = async (req, res) =>{
    const {id, nombre, lugar, direccion, club, organizador, celular_organizador, documento_organizador, email_organizador, fecha, hora_inicio, hora_final, estado, tenant} = req.body
    console.log("req.body update Competencia", req.body);
    if(tenant == 'OCR-TENANT'){
        try {
            const result = await sequelize.query(`UPDATE competencia 
                SET nombre = "${nombre}",
                lugar = "${lugar}",
                direccion = "${direccion}",
                direccion = "${direccion}",
                club = "${club}",
                organizador = "${organizador}",
                celular_organizador = "${celular_organizador}",
                documento_organizador = "${documento_organizador}",
                email_organizador = "${email_organizador}",
                fecha = "${fecha}",
                hora_inicio = "${hora_inicio}",
                hora_final = "${hora_final}",
                estado = "${estado}",
                email_organizador = "${email_organizador}"
                WHERE id = ${id}`,
                { type: sequelize.QueryTypes.INSERT })
            res.status(200).json({
                message: 'Competencia actualizada!',
                response: 'OK',
                result
            })
        } catch (error) {
            if (error.name) {
                res.status(400).json({
                    error,
                    message : 'error en la actualización',
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

const cambiarAprobadoLiga = async (req, res) =>{
    const {id, aprobado, tenant} = req.body
    console.log("req.body oficial liga Competencia", req.body);
    if(tenant == 'OCR-TENANT'){
        try {
            let aprobadoNumber;
            if(aprobado){
                aprobadoNumber = 1;
            }else{
                aprobadoNumber = 0;
            }
            console.log("aprobadoNumber", aprobadoNumber);
            
            const result = await sequelize.query(`UPDATE competencia 
                SET oficialLiga = "${aprobadoNumber}"
                WHERE id = ${id}`,
                { type: sequelize.QueryTypes.INSERT })
            res.status(200).json({
                message: 'Competencia actualizada!',
                response: 'OK',
                result
            })
        } catch (error) {
            if (error.name) {
                res.status(400).json({
                    error,
                    message : 'error en la actualización',
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

const cambiarAprobado = async (req, res) =>{
    const {id, aprobado, tenant} = req.body
    console.log("req.body aprobado Competencia", req.body);
    if(tenant == 'OCR-TENANT'){
        try {
            let aprobadoNumber;
            let result = null;
            if(aprobado){
                aprobadoNumber = 1;
                result = await sequelize.query(`UPDATE competencia 
                SET aprobado = "${aprobadoNumber}"
                WHERE id = ${id}`,
                { type: sequelize.QueryTypes.INSERT })
            }else{
                aprobadoNumber = 0;
                result = await sequelize.query(`UPDATE competencia 
                SET aprobado = "${aprobadoNumber}",
                estado = "FINALIZADA"
                WHERE id = ${id}`,
                { type: sequelize.QueryTypes.INSERT })
            }
            console.log("aprobadoNumber", aprobadoNumber);
            
            
            res.status(200).json({
                message: 'Competencia actualizada!',
                response: 'OK',
                result
            })
        } catch (error) {
            if (error.name) {
                res.status(400).json({
                    error,
                    message : 'error en la actualización',
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
    const {nombre_atleta, id_categoria, id_competencia, no_atleta, estado, id_usuario, talla, tenant} = req.body
    console.log("req.body create Atleta", req.body);
    if(tenant == 'OCR-TENANT'){
        let arrayInsert = [`${nombre_atleta}`, `${id_categoria}`, `${no_atleta}`, `${id_competencia}`, `${estado}`, `${id_usuario}`, `${talla}`]
        
        try {
            const result = await sequelize.query('INSERT INTO atleta (nombre_atleta, id_categoria, no_atleta, id_competencia, estado, id_usuario, talla) VALUES(?, ?, ?, ?, ?, ?, ?)',
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

// Metodo para crear una Atleta
const updateAtleta = async (req, res) =>{
    let {id, nombre_atleta, id_categoria, id_competencia, no_atleta, no_oleada, estado, talla, tenant} = req.body
    console.log("req.body update Atleta", req.body);

    if(tenant == 'OCR-TENANT'){
        try {
            const result = await sequelize.query(`UPDATE atleta 
                SET nombre_atleta = "${nombre_atleta}",
                id_categoria = "${id_categoria}",
                id_competencia = "${id_competencia}",
                no_atleta = "${no_atleta}",
                no_oleada = "${no_oleada}",
                estado = "${estado}",
                talla = "${talla}"
                WHERE id = ${id}`,
                { type: sequelize.QueryTypes.INSERT })
            res.status(200).json({
                message: 'Atleta actualizado!',
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

// Metodo para crear una Oleada
const createOleada = async (req, res) =>{
    const {id_competencia, id_categoria, no_oleada, fechaInicio, tenant} = req.body
    console.log("req.body create Oleada", req.body);
    if(tenant == 'OCR-TENANT'){
        let arrayInsert = [`${id_competencia}`, `${id_categoria}`, `${no_oleada}`, `${fechaInicio}`]
        
        try {
            const result = await sequelize.query('INSERT INTO oleada (id_competencia, id_categoria, no_oleada, fechaInicio) VALUES(?, ?, ?, ?)',
            {replacements: arrayInsert , type: sequelize.QueryTypes.INSERT })
            res.status(200).json({
                message: 'Oleada Creada!',
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

// Metodo para crear una Oleada
const updateOleada = async (req, res) =>{
    let {id, id_competencia, id_categoria, no_oleada, fechaInicio, fechaFin, tenant} = req.body
    console.log("req.body update Oleada", req.body);

    if(tenant == 'OCR-TENANT'){
        try {
            const result = await sequelize.query(`UPDATE oleada 
                SET id_competencia = "${id_competencia}",
                id_categoria = "${id_categoria}",
                no_oleada = "${no_oleada}",
                fechaInicio = "${fechaInicio}",
                fechaFin = "${fechaFin}"
                WHERE id = ${id}`,
                { type: sequelize.QueryTypes.INSERT })
            res.status(200).json({
                message: 'Oleada actualizada!',
                response: 'OK',
                result
            })
        } catch (error) {
            if (error.name) {
                res.status(400).json({
                    error,
                    message : 'error en la actualización',
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
const asignarTiempoAtleta = async (req, res) =>{
    const {id, tiempo_competencia, estado,  tenant} = req.body
    console.log("req.body update Atleta", req.body);
    if(tenant == 'OCR-TENANT'){
        try {
            const result = await sequelize.query(`UPDATE atleta 
                SET tiempo_competencia = "${tiempo_competencia}",
                estado = "${estado}"
                WHERE id = ${id}`,
                { type: sequelize.QueryTypes.INSERT })
            res.status(200).json({
                message: 'Atleta actualizado!',
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

const updateCategoria = async (req, res) =>{
    const {id, nombre, descripcion, no_oleada, tenant} = req.body
    console.log("req.body update Categoria", req.body);
    if(tenant == 'OCR-TENANT'){
        try {
            const result = await sequelize.query(`UPDATE categoria 
                SET nombre = "${nombre}",
                descripcion = "${descripcion}",
                no_oleada = "${no_oleada}"
                WHERE id = ${id}`,
                { type: sequelize.QueryTypes.INSERT })
            res.status(200).json({
                message: 'Categoría actualizada!',
                response: 'OK',
                result
            })
        } catch (error) {
            if (error.name) {
                res.status(400).json({
                    error,
                    message : 'error en la actualización',
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

const enviarEmail = async (req, res) =>{
    const { usuario, atleta, competencia, categoria, subject, isRegistro, tenant} = req.body
    console.log("req.body", req.body);
    
    if(tenant == 'OCR-TENANT'){
        try {
            let mailOptions;
            if(isRegistro){
                htmlTemplateRegistro = htmlTemplateRegistro
                    .replace(/{{name}}/g, usuario.nombre)
                    .replace(/{{email}}/g, usuario.email)
                    .replace(/{{username}}/g, usuario.username);

                    mailOptions = {
                        from: '"OCR APP" <andrespausa2090@gmail.com>', // sender address
                        to: usuario?.email, // list of receivers  
                        subject: subject, // Subject line
                        // text: text, // plain text body
                        html: htmlTemplateRegistro, // html body
                    };
            }else{
                htmlTemplateIncripcion = htmlTemplateIncripcion
                    .replace(/{{name}}/g, usuario.nombre)
                    .replace(/{{email}}/g, usuario.correo)
                    .replace(/{{username}}/g, usuario.username)
                    .replace(/{{ciudad}}/g, competencia.municipio)
                    .replace(/{{competencia}}/g, competencia.nombre)
                    .replace(/{{lugar}}/g, competencia.direccion)
                    .replace(/{{fecha}}/g, competencia.fecha)
                    .replace(/{{categoria}}/g, categoria)
                    .replace(/{{nombre_atleta}}/g, atleta.nombre_atleta)
                    .replace(/{{talla}}/g, atleta.talla)
                    .replace(/{{no_atleta}}/g, atleta.no_atleta);

                    mailOptions = {
                        from: '"OCR APP" <andrespausa2090@gmail.com>', // sender address
                        to: usuario?.correo, // list of receivers  
                        subject: subject, // Subject line
                        // text: text, // plain text body
                        html: htmlTemplateIncripcion, // html body
                    };
            }
            

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    res.status(200).json({
                        message: error,
                        response: 'ERROR'
                    })
                    console.error('Error al enviar el correo:', error);
                } else {
                    console.log('Correo enviado:', info.response);
                    res.status(200).json({
                        message: info.response,
                        response: 'OK'
                    })
                }
            });
                        
            
            
        } catch (error) {
            if (error.name) {
                res.status(400).json({
                    error,
                    message: 'error en el envío',
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

async function sendMail(destinatario, competencia, subject, text) {
    htmlTemplate = htmlTemplate
        .replace(/{{name}}/g, destinatario.nombre)
        .replace(/{{email}}/g, destinatario.correo)
        .replace(/{{username}}/g, destinatario.username);

        const mailOptions = {
            from: '"OCR APP" <andrespausa2090@gmail.com>', // sender address
            to: destinatario?.correo, // list of receivers  
            subject: subject, // Subject line
            text: text, // plain text body
            html: htmlTemplate, // html body
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error al enviar el correo:', error);
            } else {
                console.log('Correo enviado:', info.response);
            }
        });
    // console.log("Message sent: %s", info.messageId);
}


// exponer los metodos a la clase de routes
exports.getCompetencia = getCompetencia
exports.getCompetenciaById = getCompetenciaById
exports.getCategoria = getCategoria
exports.getCategoriaById = getCategoriaById
exports.getCategoriaByCompetencia = getCategoriaByCompetencia
exports.getAtleta = getAtleta
exports.getAtletaById = getAtletaById
exports.getAtletaByCompetencia = getAtletaByCompetencia
exports.getOleadaByCompetencia = getOleadaByCompetencia

exports.getCompetenciasPorAprobar = getCompetenciasPorAprobar
exports.getCompetenciasPorAprobarLiga = getCompetenciasPorAprobarLiga
exports.getCompetenciasInicio = getCompetenciasInicio
exports.getCompetenciasFinalizadas = getCompetenciasFinalizadas
exports.getCategoriaByCompetenciaId = getCategoriaByCompetenciaId
exports.getCountAtletasByCompetencia = getCountAtletasByCompetencia

exports.createOleada = createOleada
exports.updateOleada = updateOleada
exports.createCompetencia = createCompetencia
exports.cambiarAprobadoLiga = cambiarAprobadoLiga
exports.cambiarAprobado = cambiarAprobado
exports.updateCompetencia = updateCompetencia
exports.createCategoria = createCategoria
exports.updateCategoria = updateCategoria
exports.createAtleta = createAtleta
exports.updateAtleta = updateAtleta
exports.asignarTiempoAtleta = asignarTiempoAtleta

exports.darLlegadaAtleta = darLlegadaAtleta
exports.enviarEmail = enviarEmail

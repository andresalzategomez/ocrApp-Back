const sequelize = require('../conection') // importar la clase par la conexión de la base datos
const moment = require('moment');
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "andrespausa2090@gmail.com",
      pass: "hvrk isay jmyj lyys",
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
    const {id, nombre, lugar, direccion, organizador, celular_organizador, documento_organizador, email_organizador, fecha, estado, club, tenant} = req.body
    console.log("req.body create compet", req.body);
    if(tenant == 'OCR-TENANT'){
        let arrayInsert = [`${nombre}`, `${lugar}`, `${direccion}`, `${organizador}`, `${celular_organizador}`, `${documento_organizador}`, `${email_organizador}`, `${fecha}`, `${estado}`, `${club}`]
        
        try {
            const result = await sequelize.query('INSERT INTO competencia (nombre, lugar, direccion, organizador, celular_organizador, documento_organizador, email_organizador, fecha, estado, club) VALUES( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
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

// Metodo para crear una Atleta
const createAtleta = async (req, res) =>{
    const {nombre, celular, documento, email, categoria_id, competencia_id, no_atleta, tipo_documento, club, estado, tenant} = req.body
    console.log("req.body create Atleta", req.body);
    if(tenant == 'OCR-TENANT'){
        let arrayInsert = [`${nombre}`, `${celular}`, `${documento}`, `${tipo_documento}`, `${email}`, `${club}`, `${categoria_id}`, `${competencia_id}`, `${no_atleta}`, "EN_COMPETENCIA"]
        
        try {
            const result = await sequelize.query('INSERT INTO atleta (nombre, celular, tipo_documento, documento, email, club, categoria_id, competencia_id, no_atleta, estado) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            {replacements: arrayInsert , type: sequelize.QueryTypes.INSERT })
            res.status(200).json({
                message: 'Atleta Creado!',
                response: 'OK',
                result
            })

            const competencia = await sequelize.query(`SELECT * FROM competencia
                WHERE id = ${competencia_id}`,
                { type: sequelize.QueryTypes.SELECT })

            sendMail(req.body, competencia);
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
    let {id, nombre, celular, tipo_documento, documento, email, club, categoria_id, competencia_id, no_atleta, no_oleada, estado, tenant} = req.body
    console.log("req.body update Atleta", req.body);

    if(tenant == 'OCR-TENANT'){
        try {
            const result = await sequelize.query(`UPDATE atleta 
                SET nombre = "${nombre}",
                celular = "${celular}",
                tipo_documento = "${tipo_documento}",
                documento = "${documento}",
                email = "${email}",
                club = "${club}",
                categoria_id = "${categoria_id}",
                competencia_id = "${competencia_id}",
                no_atleta = "${no_atleta}",
                no_oleada = "${no_oleada}",
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

async function sendMail(destinatario, competencia) {
    const info = await transporter.sendMail({
      from: '"OCR APP" <andrespausa2090@gmail.com>', // sender address
      to: destinatario?.email, // list of receivers  
      subject: "OCR - Inscripción exitosa", // Subject line
      text: "Hola " + destinatario.nombre + "!", // plain text body
      html: "<b>Hola " + destinatario.nombre +  "</b><br> <b>Te has inscrito en la competencia " + competencia[0]?.nombre + "</b><br><br><br><br><div style='background: blue; width:100%; height: 40px; display: flex; align-items: center; justify-content: center; color:white;'><b class=''></b></div>", // html body
    });
    console.log("Message sent: %s", info.messageId);
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

exports.getCompetenciasInicio = getCompetenciasInicio
exports.getCategoriaByCompetenciaId = getCategoriaByCompetenciaId
exports.getCountAtletasByCompetencia = getCountAtletasByCompetencia

exports.createOleada = createOleada
exports.updateOleada = updateOleada
exports.createCompetencia = createCompetencia
exports.updateCompetencia = updateCompetencia
exports.createCategoria = createCategoria
exports.updateCategoria = updateCategoria
exports.createAtleta = createAtleta
exports.updateAtleta = updateAtleta
exports.asignarTiempoAtleta = asignarTiempoAtleta

exports.darLlegadaAtleta = darLlegadaAtleta

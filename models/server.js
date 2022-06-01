const express = require('express')
const cors = require('cors')

class Server {
    constructor () {
        /* creación instancia de servidor express */
        this.app = express()

        /* puerto */
        this.port = process.env.PORT

        this.usuariosPath = '/api/usuarios'
        /* Middlewares */
        this.middlewares()

        /* apenas se instancia un objeto de express, se disparará
        el metodo routes que construye las rutas */
        this.routes() // rutas de la app
    }

    middlewares () {
        /* cors */
        this.app.use(cors())
        
        /* lectura y parseo del body (para peticiones qe contenga info
        ej: POST) */
        this.app.use(express.json());

        /* directorio publico */
        this.app.use(express.static('public'))

    }
    
    routes () {
        /* se hace referencia al /routes, alli se manejan todas las rutas */
        this.app.use(this.usuariosPath,require('../routes/usuarios'))
    }

    listen () {
        this.app.listen(this.port,() => {
            console.log(`servidor corriendo en puerto ${this.port}`)
        })
    }
}

module.exports = Server
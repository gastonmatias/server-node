const {Router} = require('express')
const { usuariosGet, 
        usuariosDELETE, 
        usuariosPATCH, 
        usuariosPOST, 
        usuariosPUT } = require('../controllers/usuarios')

const router = Router()

/*  en teoria la ruta correcta es "/api/usuarios",
pero esto se especifica en el metodo routes() en la
clase Server */

/* NO se esta ejecutando la función, 
se esta pasando la REFERENCIA, por eso sin "()" */
router.get('/', usuariosGet)

router.delete('/', usuariosDELETE)

router.patch('/',usuariosPATCH)

router.post('/',usuariosPOST)

/*  ":id" para manejar peticiones request como "req.paramas.nombre_parametro" */
router.put('/:id',usuariosPUT)

module.exports = router;
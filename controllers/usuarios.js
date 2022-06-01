/* CONTROLADOR */

const {response, request} = require('express')

const usuariosGet = (req =request,res= response) => {
    
    /* para acceder a los query params */
    const {q, nombre ='No name', apikey,page=1} = req.query;
    
    res.json({
        "msg": "get API - controlador ",
        q,
        nombre,
        apikey,
        page
    })
}


const usuariosPUT = (req,res=response) => {
    
    const id = req.params.id
    
    res.json({
        "msg": "put API -controlador",
        id
    })
}

const usuariosPOST = (req, res= response) => {
    
    const {nombre, edad} = req.body;
    
    res.json({
        "mge": "post API - controlador",
        nombre,
        edad
    })
}

const usuariosDELETE = (req, res=response) => {
    res.json({
        "msg":"delete API - controlador"
    })
}

const usuariosPATCH = (req, res=response) => {
    res.json({
        "mge": "patch API - controlador"
    })
}

module.exports = {
    usuariosGet,
    usuariosPUT,
    usuariosPOST,
    usuariosDELETE,
    usuariosPATCH
    
}
//
const express = require('express');
const app = express();
const {formSchemaModel} = require('../models/datos');
setTimeout(() => {
    const col = require('../server');
    app.get('/', (req, res) => {
        var tipoMasaArray = new Array();
        var tamanoArray = new Array();
        var saborMasaArray = new Array();
        var coberturaArray = new Array();
        var horaArray = new Array();
        for(let i = 0; i < col.length; i++){
            for(let j = 0; j < col[i].length;j++){
                if(col[i][j].id.includes('tmn')){
                    tamanoArray.push(col[i][j].name);
                }else if(col[i][j].id.includes('tm')){
                    tipoMasaArray.push(col[i][j].name);
                }else if(col[i][j].id.includes('sm')){
                    saborMasaArray.push(col[i][j].name);
                }else if(col[i][j].id.includes('h')){
                    horaArray.push(col[i][j].name);
                }else if(col[i][j].id.includes('c')){
                    coberturaArray.push(col[i][j].name);
                }
            }
        }
        res.render('index',
            {
                "tipoMasa" : tipoMasaArray,
                "saborMasa" : saborMasaArray,
                "cobertura" : coberturaArray,
                "horaDrop" : horaArray,
                "tamano" : tamanoArray
            }
        );
        
    });
    console.log("API READY");
}, 15000);

app.post('/', (req, res) => {
    body = req.body;
    console.log(body);
    let pedidos = new formSchemaModel();              
    pedidos.solicitante = body.solicitante;
    pedidos.telefono = body.telefono;
    pedidos.tipoMasa = body.tipoMasa.name;
    pedidos.saborMasa = body.saborMasa.name;
    pedidos.cobertura = body.cobertura.name;
    pedidos.tamano = body.tamano.name;
    pedidos.catacteristicas = body.catacteristicas;
    pedidos.mensaje = body.mensaje;
    pedidos.abono = body.abono;
    pedidos.precio = body.precio;
    pedidos.horaDrop = body.horaDrop;
    pedidos.save((err, pedidosGuardado) => {
        if(err) res.status(500).send('BADTEST');
        //res.status(200).redirect(request.get('/reload'));
        res.status(200).send("DONE");
        
    });
});

module.exports = app;

//
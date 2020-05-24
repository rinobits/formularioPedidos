const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
let urlDB="mongodb+srv://rinobitsadmin:Nothing123@cluster0-xhhpf.mongodb.net/test?retryWrites=true&w=majority"
process.env.URLDB = urlDB;
//declare public directory
app.use(express.static(__dirname+'/public'));
//use
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

//register partials partials
hbs.registerPartials(__dirname + '/views/partials');
//set view engine 
app.set('view engine', 'hbs');
app.use(require('./routes/peticiones'));
//DB connect
const {tipoMasaModel} = require('./models/datos');

mongoose.connect(process.env.URLDB, {useUnifiedTopology:true,useNewUrlParser:true},
(err, res) => { 
    if(err) throw err;
    console.log('Online Database... ');
    mongoose.connection.db.listCollections().toArray(async(err, tablas) => {
        if(err) throw err;
        //tablas.forEach(collection => console.log(collection.name));
        var col = new Array();
        for(let i=0; i<6;i++){
            if(tablas[i].name != 'pedidos'){
                mongoose.connection.collection(tablas[i].name).find({}).toArray((err, info) => {
                    if(err) throw err;
                    //console.log(info);
                        col.push(info);
                });
            }
        }
        setTimeout(()=>{
            module.exports = col;
        }, 2000)
    });
});
//up server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const formSchema = Schema({
    solicitante : String,
    telefono : String,
    tipoMasa : String,
    saborMasa : String,
    cobertura : String,
    tamano : String,
    caracteristicas : String,
    mensaje : String,
    horaDrop : String,
    abono : Number, 
    precio : Number 
});
formSchemaModel = mongoose.model('pedidos', formSchema);

module.exports = {
    formSchemaModel,
};
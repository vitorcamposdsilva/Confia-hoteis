// ============================== acesso à coleção do mongoDB ==============================
const mongoose = require('./database');
const Schema = mongoose.Schema;

// ============================== criação do esquema ============================== 
let hotelSchema = new Schema({
    nomehotel: { type: String, required: true },
    numero_de_quartos: { type: Number, required: true, default: 0 },
    buffet: { type: boolean},
    cafedamanhaincluso: {type: boolean},
    numero_de_assassinatos_ocorridos_nohotel: { type: Number, required: true, default: 0 },
    com_picina: {type: boolean}
});

// ============================== exportação do modelo ============================== 
module.exports = mongoose.model('Usuario', hotelSchema, 'usuario');

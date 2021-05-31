// ============================== acesso à coleção do mongoDB ==============================
const mongoose = require('./database');
const Schema = mongoose.Schema;

// ============================== criação do esquema ============================== 
let UsuarioSchema = new Schema({
    nome: { type: String, required: true },
    cpf: { type: Number, required: true, default: 0},
    rg: { type: Number, required: true, default: 0},
    datanacismento: { type: Date, required: true, default: 0 },
    dataentrada: { type: Date, required: true, default: 0 },
    datasaida: { type: Date, required: true, default: 0 },
    historico: { type: String },
    pais_de_origem: { type: String },
    endereco: { type: String }
});

// ============================== exportação do modelo ============================== 
module.exports = mongoose.model('Usuario', UsuarioSchema, 'usuario');
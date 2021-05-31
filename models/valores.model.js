// ============================== acesso à coleção do mongoDB ==============================
const mongoose = require('./database');
const Schema = mongoose.Schema;

// ============================== criação do esquema ============================== 
let valoresSchema = new Schema({
    valor_da_diaria: { type: Number, required: true, default: 0 },
    HoraPagas: { type: Number, required: true, default: 0 },
    despesas_diarias: { type: Number, required: true, default: 0 },
    despesas_mensais: { type: Number, required: true, default: 0 },
    despesas_anuais: { type: Number, required: true, default: 0 }
});

// ============================== exportação do modelo ============================== 
module.exports = mongoose.model('Usuario', valoresSchema, 'usuario');

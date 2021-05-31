// ============================== acesso à coleção do mongoDB ==============================
const mongoose = require('./database');
const Schema = mongoose.Schema;

// ============================== criação do esquema ============================== 
let despesasSchema = new Schema({
    funcionario_salario: { type: Number, required: true, default: 0},
    aluguel: { type: Number, required: true, default: 0 },
    conta_de_luz: { type: Number, required: true, default: 0 },
    conta_de_internet: { type: Number, required: true, default: 0 },
    manutençao: { type: Number, required: true, default: 0 },
    g_add: { type: Number, required: true, default: 0 },
    imposto: { type: Number, required: true, default: 0 }
});

// ============================== exportação do modelo ============================== 
module.exports = mongoose.model('Despesas', despesasSchema, 'despesas');


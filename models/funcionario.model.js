// ============================== acesso à coleção do mongoDB ==============================
const mongoose = require('./database');
const Schema = mongoose.Schema;

// ============================== criação do esquema ============================== 
let funcionarioSchema = new Schema({
    nome: { type: String, required: true },
    datanacismento: { type: Date, required: true, default: 0 },
    data_contratacao: { type: Date, required: true, default: 0 },
    setor: { type: String },
    salario: { type: Number, required: true, default: 0},
    horas: { type: Date, required: true, default: 0 },
    cpf: { type: Number, required: true, default: 0},
    rg: { type: Number, required: true, default: 0},
    dependentes: { type: String }
});

// ============================== exportação do modelo ============================== 
module.exports = mongoose.model('Funcionario', funcionarioSchema, 'funcionario');






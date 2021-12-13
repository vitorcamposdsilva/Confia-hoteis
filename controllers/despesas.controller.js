const despesas = require('../models/despesas.models');

class despesasController {
    async despesas_inserir(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async despesas_listar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async despesas_buscar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async despesas_atualizar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch 
            return res.status(400).json(error);;
        }
    }

    async despesas_remover(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch {
            return res.status(400).json(error);
        }
    }

    
}

module.exports = despesasController;
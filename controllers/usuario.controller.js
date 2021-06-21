const usuario = require('../models/usuario.model');

class usuarioController {
    async usuario_inserir(req, res) {
        try {
            const usuario = await Usuario.create(reg. body)
            if (!usuario) return res.status(406).json({error: 'Erro insere usuario.'})
            return res.status(200).json(usuario)
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async usuario_listar(req, res) {
        try {
            const usuarios = await Usuario.find({}).sort({nome:1});
            if (!usuarios) return res.status(406).json({error: "Erro lista usuario"});
            return res.status(200).json(usuarios);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async usuario_buscar(req, res) {
        try {
            const {id} = req.params;
            const data = await usuario.findById(id);
            if (!data) return res.status(406).json({error: "Erro consulta usuario"});
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async usuario_atualizar(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch {
            return res.status(400).json(error);
        }
    }

    async usuario_remover(req, res) {
        try {
            return res.status(200).json({ ok: "ok" });
        } catch {
            return res.status(400).json(error);
        }
    }

}

module.exports = usuarioController;
const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
    try {
        const livros = await obterLivros();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter os livros' });
    }
});

router.post('/', async (req, res) => {
    try {
        console.log('Dados recebidos:', req.body);  // Adicione esta linha para depuração
        const livro = req.body;
        await incluir(livro);
        res.status(201).json({ message: 'Livro incluído com sucesso' });
    } catch (error) {
        console.error('Erro ao incluir o livro:', error);  // Adicione esta linha para depuração
        res.status(500).json({ message: 'Erro ao incluir o livro' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const codigo = req.params.id;
        await excluir(codigo);
        res.status(200).json({ message: 'Livro excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir o livro' });
    }
});

module.exports = router;


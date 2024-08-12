const express = require('express');
const router = express.Router();
const { getlivros, getlivro, postLivro, patchLivro, deleteLivro  } = require('../contoller/livros.controller'); // Caminho relativo correto

router.get('/', getlivros);
router.get('/:id', getlivro);
router.post('/', postLivro);
router.patch("/id", patchLivro)
router.delete('/:id', deleteLivro)

module.exports = router;

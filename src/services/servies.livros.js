const fs =require("fs")
const path = require("path");

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("./database/livros.json"))
} 

function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("./database/livros.json"))

   const livroFiltrado = livros.filter(livro => livro.id === id)[0]
   return livroFiltrado
}


function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("./database/livros.json"))

    const novaListaDeLivros = [ ...livros, livroNovo ]

    fs.writeFileSync("./database/livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes,  id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("./database/livros.json"))
    const indiceModificado = livrosAtuais.findindex(livro => livro.id === id)
    
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletarLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("/database/livros.json"))

    const livrosFiltrados = livros.filter( livro => livro.id!== id )
    fs.writeFileSync("livros.json", JSON.stringfy(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletarLivroPorId
};
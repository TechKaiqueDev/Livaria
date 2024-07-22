import http from "http";

//Porta de comunicaçao que vai ser utilizada
const PORT = 3000;

const rotas ={ 
    
}

const server = http.createServer((req, res) =>{
res.writeHead(200,{"Content-Type" : "text/plain"});
res.end("Node Js");

});

server.listen(PORT,()=>{
console.log("servidor escutando")
})
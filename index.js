const express = require('express')
const corretora = require('./controller/corretora.js')
const app = express()
const port = 5000

app.use(express.json())






//como pegar dados que vem do cliente
app.get("/corretora", (req, res) => {
    res.json(corretora.index())
})

app.post("/corretora", (req, res) => {
    const code = corretora.store(req.body)
    res.status(code).json()
})

app.get("/corretora/:id", (req, res) => {
    res.json(corretora.show(req.params.id))
})

app.put("/corretora/:id", (req, res) => {
    const code = corretora.update(req.body, req.params.id)
  res.status(code).json()  
})

/* app.get('/:usuario/:id', (req, res) => {

    console.log(req.params.usuario, req.params.id) 
    console.log("depois do ?: ", req.query.arvore)
    console.log("corpo da requisicao: ", req.body)
    res.send("frio da porra")
}) */

app.listen(port, () => {
    console.log("conexao deu boa")
})


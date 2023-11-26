const express = require('express')
const app = express()

//express usar EJS como view engine
app.set('view engine','ejs')

app.get('/:nome/:lang', (req, res) => {
    var nome = req.params.nome
    var lang = req.params.lang
    var exibirMsg = false

    var produtos = [
        {nome: 'Biscoito', preco: 3.14},
        {nome: 'Maça', preco: 5}
    ]

    res.render('index',{
        nome: nome,
        lang: lang,
        empresa: 'Guia do programador',
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    })
})

app.listen(8080,()=>{console.log('app rodando')})
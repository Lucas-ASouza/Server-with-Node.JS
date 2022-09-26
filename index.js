const express = require('express');
//puxa a biblioteca Express
const consign = require('consign');
//modulo de rotas

const bodyParser = require('body-parser');
//modulo de ler dados no body

let app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

consign().include('routes').into(app);
//incluir todas as rotas da pasta 'routes' e atribuindo ao app


app.listen(3000, '127.0.0.1', ()=>{

    console.log('servidor rodando!');


});
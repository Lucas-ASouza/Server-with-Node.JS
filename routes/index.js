module.exports = (app)=>{

    app.get('/',(req, res)=>{

        res.statusCode = 200;
        res.setHeader('Contet-Type', 'text/html');
        res.end('<h1>Olá</h1>')
    
    });

}
//exporta o modulo routes para os outros
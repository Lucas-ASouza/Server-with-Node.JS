let NeDB = require('nedb');
//chama o módulo do banco de dados

let db = new NeDB({
    filename:'users.db' ,
    autoload:true
})

module.exports = (app)=>{

    app.get('/users', (req, res) => {

        res.statusCode = 200;
        res.setHeader('Contet-Type', 'application/json');
        res.json({
            users:[{
                name: 'Hcode',
                email: 'contato@hcode.com.br',
                id:1
            }]
        });
    
    });
    
    app.post('/users', (req, res)=>{
    
        db.insert(req.body, (err, user)=>{

            if (err) {
                console.log(`error: ${err}`)
                res.status(400).json({
                    error: err
                })
            } else{

                res.status(200).json(user);
            
            }

        });
    
    });
    
};
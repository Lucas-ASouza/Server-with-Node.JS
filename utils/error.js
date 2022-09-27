module.exports = {

    send: (err, req, res, code = 400) =>{

        console.log(`error:${err}`);
        err.status(code).json({
            error:err
        });

    }
};
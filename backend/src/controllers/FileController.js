const Box = require('../models/Files')

class FileController {
    async store(req,res){
        //Criar um arquivo
        console.log(req);
        res.send('Ok')
        
    }
}

module.exports =  new FileController()
const File = require('../models/Files')
const Box = require('../models/Box')

class FileController {
    async store(req,res){
        //Criar um arquivo

        const box = await Box.findById(req.params.id)

        const file = await File.create({
            title: req.file.originalname,
            path: req.file.key
        })

        box.files.push(file);

        await box.save()

        res.json(file)
        
    }
}

module.exports =  new FileController()
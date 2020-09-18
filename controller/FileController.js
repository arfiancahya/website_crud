const stream = require('stream');
const express = require("express");
const models = require("../models");
const fs = require('fs');
const file = models.File;

const uploadFile = async (req, res) => {
    
    // try {
    //     console.log('req file: ', req.file);
    //     const uploadFile = await file.create({
    //         type: req.file.mimetype,
    //         name: req.file.originalname,
    //         data: req.file.buffer
    //     });
    //     res.contentType('json');
    //     res.status(200).send({
    //         status: 200,
    //         message: `File uploaded Successfull! -> filename = ${req.file.originalname}`,
    //         file: uploadFile
    //     }); 

    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send({
    //         status: 500,
    //         message: "Error mulu"
    //     });
    // }

    try {
        console.log(req.file);
    
        if (req.file == undefined) {
          return res.send(`You must select a file.`);
        }
    
        file.create({
          type: req.file.mimetype,
          name: req.file.originalname,
          data: fs.readFileSync(
            __basedir + "/client/src/resources/static/assets/uploads/" + req.file.filename
          ),
        }).then((files) => {
          fs.writeFileSync(
            __basedir + "/client/src/resources/static/assets/temp/" + files.name,
            files.data
          );
    
          return res.status(200).send({
            status: 200,
            message: "Berhasil upload file",
        });
        });
      } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
      }
}

const getFile = async (req, res) => {
    const fileGet = await file.findAll({
        attributes: ['id', 'name']
    });
    res.status(200).send({
        status: 200,
        message: "Berhasil get file",
        data: fileGet,
    });
}

const downloadFile = (req, res) => {
    file.findById(req.params.id).then(file => {
      const fileContents = Buffer.from(file.data, "base64");
      const readStream = new stream.PassThrough();
      readStream.end(fileContents);
      
      res.set('Content-disposition', 'attachment; filename=' + file.name);
      res.set('Content-Type', file.type);
   
      readStream.pipe(res);
    })
  }

module.exports = {
    uploadFile,
    getFile,
    downloadFile
};
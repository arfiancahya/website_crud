const stream = require('stream');
const express = require("express");
const models = require("../models");
const file = models.File;

const uploadFile = async (req, res) => {
    
    try {
        console.log('req file: ', req.file);
        const uploadFile = await file.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: req.file.buffer
        });
        res.status(200).send({
            status: 200,
            message: `File uploaded Successfull! -> filename = ${req.file.originalname}`,
            file: uploadFile
        }); 

    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: "Error mulu"
        });
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

exports.downloadFile = (req, res) => {
    file.findById(req.params.id).then(file => {
      var fileContents = Buffer.from(file.data, "base64");
      var readStream = new stream.PassThrough();
      readStream.end(fileContents);
      
      res.set('Content-disposition', 'attachment; filename=' + file.name);
      res.set('Content-Type', file.type);
   
      readStream.pipe(res);
    })
  }

module.exports = {
    uploadFile,
    getFile
};
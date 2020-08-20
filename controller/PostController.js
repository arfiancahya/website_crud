const express = require("express");
const model = require("../models");

const getAllPost = async (req, res) => {
    const Post = await model.Post.findAll({});
    res.status(200).send({
        status: 200,
        message: "Berhasil get data post",
        data: Post,
    });
};

module.exports = {
    getAllPost
};
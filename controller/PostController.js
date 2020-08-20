const express = require("express");
const model = require("../models");
const Po = model.posts;
const Op = model.Sequelize.Op;

const getAllPost = async (req, res) => {
    const Post = await Po.findAll({});
    res.status(200).send({
        status: 200,
        message: "Berhasil get data post",
        data: Post,
    });
};

const createPost = async (req, res) => {
    try {

        if (!req.body.title) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        const post = {
            title: req.body.title,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        };

        const Post = await Po.create({
            post
        });

        res.status(200).send({
            status: 200,
            message: "Post berhasil dibuat",
            data: Post
        });
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "Error membuat post"
        });
    }

};

module.exports = {
    getAllPost,
    createPost
};
const express = require("express");
const models = require("../models");
const pos = models.Post;


const getAllPost = async (req, res) => {
    const Post = await pos.findAll({});
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

        const {
            title,
            description,
            publish
        } = req.body;

        const Post = await pos.create({
            title,
            description,
            publish
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

const updatePost = async (req, res) => {
    try {
        const id = req.params.id;
        const {
            title,
            description,
            publish
        } = req.body;
        const Post = await pos.update({
            title,
            description,
            publish,
        }, {
            where: {
                id: id,
            },
        });

        res.status(200).send({
            status: 200,
            message: "Update Berhasi",
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
    createPost,
    updatePost
};
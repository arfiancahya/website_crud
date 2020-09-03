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

        if (!req.body.title || !req.body.description) {
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

const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        const Post = await pos.destroy({
            where: {
                id: id,
            }
        });

        res.status(200).send({
            status: 200,
            message: "Terhapus",
            data: Post
        });
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "gagal"
        });
    }
};

const deleteAllPost = async (req, res) => {
    try {
        const id = req.params.id;
        const Post = await pos.destroy({
            where: {

            }
        });

        res.status(200).send({
            status: 200,
            message: "Terhapus Semua",
            data: Post
        });
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "gagal"
        });
    }
};

const orderPost = async (req, res) => {
    try {
        const id = req.params.id;
        const Order = await pos.findAll({
             order: [
                ['id', 'DESC']
            ],
        });
        res.status(200).send({
            status: 200,
            message: "Berhasil get data post",
            data: Order,
        });
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "gagal"
        });
    }
};

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const detail = await pos.findOne({
             where: {
                 id: id
             }
        });
        res.status(200).send({
            status: 200,
            message: "Berhasil get data post",
            data: detail,
        });
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "gagal"
        });
    }
};

module.exports = {
    getAllPost,
    createPost,
    updatePost,
    deletePost,
    deleteAllPost,
    orderPost,
    getById
};
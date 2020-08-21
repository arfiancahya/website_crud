const express = require("express");
const bcrypt = require("bcryptjs");
const Username = require("../models");
const User = Username.User;
const Op = Username.Sequelize.Op;

const daftarUser = async (req, res) => {
    try {

        const {
            username,
            email,
            password
        } = req.body;

        const data = await User.findOne({
            where: {
                [Op.or]: [{
                        username: username
                    },
                    {
                        email: email
                    }
                ]
            }
        });

        if (!data) {

            const hashPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                username: username,
                email: email,
                password: hashPassword,
            });

            return res.status(201).send({
                status: 200,
                message: "User Berhasil Dibuat",
                data: user,
            });


        } else {
            res.status(500).send({
                status: 500,
                message: "username dan email sudah ada"
            });

        }

    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "Error Membuat User"
        });
    }
};

module.exports = {
    daftarUser
};
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

        const data = await User.findAll({
            where: {
                [Op.and]: [{
                        username: username
                    },
                    {
                        email: email
                    }
                ]
            }
        });

        if (data) {
            res.status(500).send({
                status: 500,
                message: "usernam dan email ssudah ada"
            });

        } else {
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
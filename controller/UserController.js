const express = require("express");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const Username = require("../models");
const User = Username.User;
const Op = Username.Sequelize.Op;
require("dotenv").config();
const secret = process.env.JWT_SECRET = "secret";

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

const loginUser = async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body;

        const dataUser = await User.findOne({
            where: {
                [Op.or]: [{
                        username: username
                    },
                    {
                        email: username
                    }
                ]
            }
        });

        if (dataUser) {
            const passwordUser = await bcrypt.compare(password, dataUser.password);
            if (passwordUser) {
                const data = {
                    id: dataUser.id
                };

                const token = await jsonwebtoken.sign(data, secret);

                return res.status(200).send({
                    status: 200,
                    message: "Selamat datang",
                    token: token
                });
            } else {
                res.status(500).send({
                    status: 500,
                    message: "Username atau Password anda salah"
                });
            }
        }
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "Sayang Sekali anda tidak bisa login"
        });
    }
};
module.exports = {
    daftarUser,
    loginUser
};
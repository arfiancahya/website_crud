const express = require("express");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const Username = require("../models");
const User = Username.User;
const Op = Username.Sequelize.Op;
require("dotenv").config();
const secret = process.env.JWT_SECRET = "secret";
const client = process.env.CLIENT_URL = "http://localhost:5001";

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
                return res.status(500).send({
                    status: 500,
                    message: "Password anda salah"
                });
            }
        }
        return res.status(500).send({
            status: 500,
            message: "Username dan email anda salah"
        });

    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "Sayang Sekali anda tidak bisa login"
        });
    }
};

const getSingleUser = async (req, res) => {
    const user = await User.findOne({
        id: req.id
    });

    return res.status(200).send({
        status: 200,
        message: "Berhasil",
        data: user
    });
};

const forgetPassword = async (req, res) => {
    const {
        emal
    } = req.body;

    const user = await User.findOne({
        email: email
    });
    if (!user) {
        return res.status(500).send({
            status: 500,
            message: "Email tak tersedia"
        });
    }

    const token = jsonwebtoken.sign({
        id: user.id
    }, secret);

    await User.updateOne({
        resetPassword: token
    });

    const templateEmail = {
        from: "Arfian Cahya",
        to: email,
        subject: "Link Reset Password",
        html: `<p>Silakan klik link dibawah ini untuk reset password anda</p><p>${client}/resetpassword/${token}</p>`
    };

    return res.status(200).send({
        message: req.body.email
    });
};

module.exports = {
    daftarUser,
    loginUser,
    getSingleUser,
    forgetPassword
};
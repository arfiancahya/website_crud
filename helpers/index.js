const nodemailer = require("nodemailer");

exports.kirimEmail = dataEmail => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTSL: true,
        auth: {
            user: "isi email",
            pass: "isi passnya"
        },
    });
    return (
        transporter.sendMail(dataEmail)
        .then(info => console.log(`Email terkirim: ${info.message}`))
        .catch(err => console.log(`Terjadi Kesalahan: ${err}`))
    )
};
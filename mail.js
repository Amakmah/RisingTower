// Chunk 3
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '9e9fea6c521a322d229f5e26913e3be7-28d78af2-3630e65f',
        domain: 'sandbox6e927a3f0b93435dae8a07f1e8210e86.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

//Chunk 4
const sendMail = (prenom, nom, email, phone, objet, message, cb) => {
    const mailOptions = {
        from: email,
        to: "d.raso@intech-sud.fr",
        subject: objet, 
        text: "Monsieur/Madame " + nom + " " + prenom + "\nEmail: <" + email + ">\nNuméro de téléphone: " + phone + "\n" + message
    }

    transporter.sendMail(mailOptions, function(err,data) {
        if (err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
}

module.exports = sendMail;
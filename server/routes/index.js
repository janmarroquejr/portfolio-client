const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post("/send", () => {
	console.log("trying to send an email")
	let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'janmarroquejr@gmail.com',
        pass: ''
    }
});

// setup email data with unicode symbols
	let mailOptions = {
	    from: '"Janmar Roque Jr 👻" <janmarroquejr@gmail.com>', // sender address
	    to: 'xitafij373@win-777.net', // list of receivers
	    subject: 'Hello ✔', // Subject line
	    text: 'Hello world ?', // plain text body
	    html: '<b>Hello world ?</b>' // html body
	};

// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
	    if (error) {
	        return console.log(error);
	    }
	    console.log('Message %s sent: %s', info.messageId, info.response);
	});

})

module.exports = router;
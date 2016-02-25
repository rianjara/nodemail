
var nodemailer = require('nodemailer');

var smtpConfig = {
    host: 'smtp.webfaction.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'adotcom_richard',
        pass: '****************'
    }
};

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(smtpConfig);

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Rick" <richard@adotcom.webfactional.com>', // sender address
    to: 'richardjarabravo@gmail.com, richard.jara@una.gob.ec', // list of receivers
    subject: 'Prueba nodemailer', // Subject line
    text: 'Hello world - nodemailer', // plaintext body
    html: '<b>Hello world - nodemailer</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
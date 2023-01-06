var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'priyamurpani99@gmail.com',
      pass: 'smileyarr1'
    }
  });
  var mailOptions = {
    from: 'priyamurpani99@mail.co',
    to: 'priyamurpani@nimapinfotechn.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
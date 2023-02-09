var cron=require('node-cron');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'priyamurpani99@gmail.com',
      pass: 'snce sjvv fanm plbs'
    }
  });
  cron.schedule('5 * * * *',function(){
    console.log('----------------');
    console.log('Running cron job')

  })
  var mailOptions = {
    from: 'priyamurpani99@mail.com',
    to: 'priyamurpani@nimapinfotech.com',
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
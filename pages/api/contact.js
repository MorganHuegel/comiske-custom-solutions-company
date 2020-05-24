const nodemailer = require("nodemailer");
const emailTo = require('dotenv').config({path: '.env'}).parsed.CONTACT_EMAIL_TO

let transporter = nodemailer.createTransport({
  sendmail: true
});

export default (req, res) => {
  transporter.sendMail({
    from: 'inquiry@comiske.com',
    to: emailTo,
    subject: `Inquiry from ${req.body.name}`,
    text: `
      <h1>Request submitted from ${req.body.name}</h1>
      <p>Name: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
      <p>Phone: ${req.body.phone}</p>
      <p>Service: ${req.body.service}</p>
      <p>Message: ${req.body.message}</p>
    `
  }, (err, info) => {
    if (!err) {
      // Add messageId and message to a database somewhere from info object
      res.status(200).json({success: false})
    } else {
      // Add error to an error log somewhere
      res.status(500).json({success: false})
    }
  });
}
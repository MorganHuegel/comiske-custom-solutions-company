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
      Request submitted from ${req.body.name}
      Name: ${req.body.name}
      Email: ${req.body.email || 'n/a'}
      Phone: ${req.body.phone || 'n/a'}
      Service: ${req.body.service || 'n/a'}
      Message: ${req.body.message || 'n/a'}
    `
  }, (err, info) => {
    if (!err) {
      // Add messageId and message to a database somewhere from info object
      return res.status(200).json({success: true})
    } else {
      // Add error to an error log somewhere
      return res.status(500).json({success: false})
    }
  });
}
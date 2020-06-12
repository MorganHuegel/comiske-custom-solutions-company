const nodemailer = require("nodemailer");
require('dotenv').config()
const {
  CONTACT_EMAIL_TO_1: emailTo, 
  CONTACT_EMAIL_TO_2: emailToCc,
  CONTACT_EMAIL_FROM_USERNAME: user,
  CONTACT_EMAIL_FROM_PASSWORD: pass,
  OAUTH_CLIENT_ID: clientId,
  OAUTH_CLIENT_SECRET: clientSecret,
  OAUTH_ACCESS_TOKEN: accessToken,
  OAUTH_REFRESH_TOKEN: refreshToken,
  OAUTH_EXPIRY_DATE: expires
} = process.env

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  service: 'Gmail',
  auth: {
    user,
    pass,
    type: 'OAuth2',
    clientId,
    clientSecret,
    refreshToken,
    accessToken,
    expires
  }
});

export default (req, res) => {
  transporter.sendMail({
    from: 'Website Inquiry <inquiry@comiske.com>',
    to: emailTo,
    cc: emailToCc,
    subject: `Inquiry from ${req.body.name}`,
    text: `
      Request submitted from ${req.body.name}
      Name: ${req.body.name}
      Email: ${req.body.email || 'n/a'}
      Phone: ${req.body.phone || 'n/a'}
      Service: ${req.body.service || 'n/a'}
      Message: ${req.body.message || 'n/a'}

      Do not REPLY to this email, as it will just go the developer, not the person who submitted the form.
    `,
    html: `
      <h1>New inquiry submitted by ${req.body.name}</h1>
      <p>Name: ${req.body.name}</p>
      <p>Email: ${req.body.email || 'n/a'}</p>
      <p>Phone: ${req.body.phone || 'n/a'}</p>
      <p>Service: ${req.body.service || 'n/a'}</p>
      <p>Message: ${req.body.message || 'n/a'}</p>
      <br>
      <p><em>Do not REPLY to this email because it will just go to the developer, not the person who submitted the form. </em></p>
    `
  }, (err, info) => {
    console.log('ERROR: ', JSON.stringify(err))
    console.log('INFO: ', JSON.stringify(info))

    if (!err) {
      // Add messageId and message to a database somewhere from info object
      return res.status(200).json({success: true})
    } else {
      // Add error to an error log somewhere
      return res.status(500).json({success: false})
    }
  });
}
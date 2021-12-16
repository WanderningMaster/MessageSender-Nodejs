const nodemailer = require('nodemailer')
const {mail, mailPassword} = require('../config.json');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: mail,
      pass: mailPassword,
    },
})

module.exports = mailController = (req, res, next) => {
  const {name, group, theme, message} = req.body;
  transporter.sendMail({
    from: `"${name} ${group}" <$me@example.com>`,
    to: mail,
    subject: theme,
    text: message,
    html: `<h2>${message}</h2>`
  }).then(data => {
    req.mail = data;
    next();
  }).catch(() => res.json({data: 'error'}));
}

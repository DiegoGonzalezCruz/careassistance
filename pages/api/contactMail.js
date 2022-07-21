// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function sendEmail(req, res) {
  console.log(req.body)
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    requireTLS: true,
    auth: {
      user: 'contacto@careassistance.com',
      pass: 'Care.2022!',
    },
    secure: false,
  })
  const mailData = {
    from: 'contacto@careassistance.com',
    to: 'contacto@careassistance.com',
    subject: `Nuevo contacto ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`

  }
  transporter.sendMail(mailData, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200).json({ status: "OK" })


}


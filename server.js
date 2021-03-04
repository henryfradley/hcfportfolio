const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const credentials = require('./dev_config.js');


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: credentials.user,
      pass: credentials.pw
    }
  });

  transporter.verify(function(err, success) {
    if (err) {
      console.log(err);
    } else {
      console.log('messager ready');
    }
  });

  server.post('/send', (req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;
    let content = `name: ${name} \n email: ${email} \n message: ${message}`;

    let mail = {
      from: name,
      to: 'fradleyhenry@gmail.com',
      subject: `${name} messaged you!`,
      text: content
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        });
      } else {
        res.json({
          status: 'success'
        });
      }
    });
  });




  server.use(cors());
  server.use(express.json());
  server.use('/', router);




  server.listen(3000, (err) => {
    if (err) {
      throw err;
    }
    console.log('Server running on http://localhost:3000');
  });
});
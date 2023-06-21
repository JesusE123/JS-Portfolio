import nodemailer from 'nodemailer';

export default function sendMail(req, res) {
    const {subject, email, message} = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:'jesusan0110@gmail.com'
        }
    });

    const contentEmail = {
        from: email,
        to: 'jesusan0110@gmail.com',
        subject: subject,
        text: message,

    };

    try {
        transporter.sendMail(contentEmail)
        res.status(200).json({message: 'correo enviado con exito'})
    } catch (error) {
        res.status(500).json({error: 'error al enviar'})
    }


}

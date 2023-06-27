import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != "POST") {

    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, subject, message } = req.body;


  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.API_KEY
    },
  });

  const contentMail = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: subject,
    text: `Correo de: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(contentMail);
    return res.status(200).json({ message:"su correo fue enviado con exito" });
  } catch (error) {
    return res.status(400).json({ error: "El correo no pudo ser enviado" });
  }
}


export default handler;

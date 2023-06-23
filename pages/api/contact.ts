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
      user: "jesusan0110@gmail.com",
      pass: process.env.API_KEY
    },
  });

  const contentMail = {
    from: "jesusan0110@gmail.com",
    to: "jesusan0110@gmail.com",
    subject: subject,
    text: `Correo de: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(contentMail);
    return res.status(200).json({ hola: "mundo" });
  } catch (error) {
    return res.status(400).json({ error: "por aca no papa" });
  }
}


export default handler;

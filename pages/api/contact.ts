import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != "POST") {

    return res.status(405).json({ error: 'Method Not Allowed' });
}

    const { email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "jesusan0110@gmail.com",
        pass: 'ookudpqotygbxtyj'
      },
    });

    const contentMail = {
      from: email,
      to: "jesusan0110@gmail.com",
      subject: subject,
      text: message,
    };

    try {
     await transporter.sendMail(contentMail);
      return res.status(200).json({ hola: "mundo" });
    } catch (error) {
      return res.status(400).json({ error: "por aca no papa" });
    }
  }


export default handler;

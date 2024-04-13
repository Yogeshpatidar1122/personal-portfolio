// pages/api/SendEmail.tsx
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { env } from 'process';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

      const emailName=process.env.EMAIL;
      const emailPassword = process.env.EMAIL_KEY ;

    // Create a transporter with Nodemailer
    const transporter = nodemailer.createTransport({
      // Replace with your SMTP details
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      service: 'gmail',
      auth: {
        user: emailName,
        pass: emailPassword,
      },
    });

    // Define email options
    const mailOptions = {
      from: emailName,
      to: emailName,
      subject: subject,
      text: message,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

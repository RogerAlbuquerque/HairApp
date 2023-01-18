import nodemailer from 'nodemailer';
import { Request, Response } from 'express';

export async function passwordRecovery(req: Request, res:Response){
  const clientEmail = req.body;

  // Crie um transporte usando o seu provedor de e-mail
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 587,
    secure: false, // use SSL
    auth: {
      user: 'cabeleireiroapp@gmail.com',
      pass: 'rfqfdqtvznplzdvq'
    }
  });

  // Configure o remetente e destinatário do e-mail
  const mailOptions = {
    from: 'cabeleireiroapp@gmail.com',
    to: clientEmail.email,
    subject: 'Link para alteração de senha',
    text: `http://localhost:3001/password_recovery/${clientEmail.email}`
  };

  // Envie o e-mail
  transporter.sendMail(mailOptions, (erro) => {
    if (erro){
      res.status(500).json(erro);
    }
    else{
      res.status(201).json('Mensagem enviada, cheque sua caixa de email');
    }
  });
}



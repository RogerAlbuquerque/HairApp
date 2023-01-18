import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { Hairdresser } from '../models/Hairdresser';
import { Client } from '../models/Client';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();


export async function passwordRecovery(req: Request, res:Response){
  const clientEmail = req.body;

  // Cria um transporte usando o seu provedor de e-mail
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 587,
    secure: false, // use SSL
    auth: {
      user: 'cabeleireiroapp@gmail.com',
      pass: process.env.SENDMAIL_AUTH_PASS
    }
  });

  // Configura o remetente e destinatário do e-mail
  const mailOptions = {
    from: 'cabeleireiroapp@gmail.com',
    to: clientEmail.email,
    subject: 'Link para alteração de senha',
    text: `http://localhost:3001/password_recovery/${clientEmail.email}`
  };


  const clientExist = await Client.findOne().where('email').equals(clientEmail);
  const hairdExist = await Hairdresser.findOne().where('email').equals(clientEmail);

  if(clientExist || hairdExist){
    // Envia o e-mail
    transporter.sendMail(mailOptions, (erro) => {
      if (erro){
        res.status(500).json(erro);
      }
      else{
        res.status(201).json('Mensagem enviada, cheque sua caixa de email');
      }
    });
  }else{
    res.status(500).json({error:'This is Email does not exist in this application'});
  }
}



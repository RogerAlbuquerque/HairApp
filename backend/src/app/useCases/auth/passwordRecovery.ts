import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { Hairdresser } from '../../models/Hairdresser';
import { Client } from '../../models/Client';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();


export async function passwordRecovery(req: Request, res:Response){
  const clientEmail = req.body;

  const clientExist = await Client.findOne().where('email').equals(clientEmail.email);
  const hairdExist = await Hairdresser.findOne().where('email').equals(clientEmail.email);

  const token = crypto.randomBytes(20).toString('hex');

  const now = new Date();
  now.setHours(now.getHours() + 1);

  const tokenExpire = now;

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
    html: `<h1> Token para recuperação de senha </h1>
    <p>Copie esse token e use ele no espaço requisitado dentro do link abaixo: </p>
    <h4> ${token} </h4>
    http://localhost:3001/password_recovery/${clientEmail.email}
    `};


  if(clientExist){

    await Client.findOneAndUpdate({passwordResetToken: token, expireTimeToken:tokenExpire}).where('email').equals(clientEmail.email);

    transporter.sendMail(mailOptions, (erro) => {
      if (erro){
        res.status(500).json(erro);
      }
      else{
        res.status(201).json('Mensagem enviada com sucesso!. Cheque sua caixa de email');
      }
    });

  }else{
    if(!hairdExist){
      res.status(500).json({error:'Email does not registered'});
    }else{

      await Hairdresser.findOneAndUpdate({passwordResetToken: token, expireTimeToken:tokenExpire}).where('email').equals(clientEmail.email);

      transporter.sendMail(mailOptions, (erro) => {
        if (erro){
          res.status(500).json(erro);
        }
        else{
          res.status(201).json('Mensagem enviada, cheque sua caixa de email \n TOKEN: ' + token + '\nToken expira em:  ' + tokenExpire );
        }
      });

    }
  }
}



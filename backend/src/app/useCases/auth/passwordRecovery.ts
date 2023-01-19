import { Request, Response } from 'express';
import { Hairdresser } from '../../models/Hairdresser';
import { Client } from '../../models/Client';

export async function passwordRecovery(req: Request, res:Response){
  const {token, email} = req.params;

  // const clientExist = await Client.findOne({email:email, passwordResetToken:token});
  // const hairdExist = await Hairdresser.findOne({email:email, passwordResetToken:token});

  const now = new Date();
  now.setHours(now.getHours());


  await Client.findOne({email:email, passwordResetToken:token}).then(async (clientData)=>{
    if(clientData){
      console.log('TEM CLIENTE');
    }else {

      await Hairdresser.findOne({email:email, passwordResetToken:token}).then(async (hairdData)=>{
        if(hairdData){
          console.log('TEM Cabeleireiro');
        }else {
          console.log('BUSCA CABELO');
        }
      }).catch(err => {
        console.log('TA TUDO VAZIO AQUI, NÃO TEM NADA NÃOCABELO');
      });

    }
  }).catch(err => {
    console.log('TA TUDO VAZIO AQUI, NÃO TEM CLIENTE');
  });

}

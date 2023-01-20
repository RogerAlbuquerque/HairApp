import { Request, Response } from 'express';
import { Hairdresser } from '../../models/Hairdresser';
import { Client } from '../../models/Client';

export async function passwordRecovery(req: Request, res:Response){
  const {token, email} = req.params;

  // const clientExist = await Client.findOne({email:email, passwordResetToken:token});
  // const hairdExist = await Hairdresser.findOne({email:email, passwordResetToken:token});

  const now = new Date();
  now.setHours(now.getHours());

  console.log(now);
  await Client.findOne({email:email, passwordResetToken:token, expireTimeToken:{$gt:now}}).then(async (clientData)=>{
    if(clientData){
      console.log(clientData);
    }else {

      await Hairdresser.findOne({email:email, passwordResetToken:token, expireTimeToken:{$gt:now}}).then(async (hairdData)=>{
        if(hairdData){
          console.log(hairdData);
        }else {
          res.status(500).json({error:'token or email does not exist'});
        }
      }).catch(err => {
        console.log(err);
        res.status(500).json({error:'Internal server error!'});
      });

    }
  }).catch(err => {
    console.log(err);
    res.status(500).json({error:'Internal server error!'});
  });

}

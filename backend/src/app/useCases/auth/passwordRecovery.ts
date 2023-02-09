import { Request, Response } from 'express';
import { Hairdresser } from '../../models/Hairdresser';
import { Client } from '../../models/Client';
import bcrypt from 'bcryptjs';

export async function passwordRecovery(req: Request, res:Response){
  const newPassword = req.body.newPassword;
  const token = req.body.token;
  const email = req.body.email;


  const now = new Date();
  now.setHours(now.getHours());

  await Client.findOne({email:email, passwordResetToken:token, expireTimeToken:{$gt:now}}).then(async (clientData)=>{
    if(clientData){
      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newPassword, salt, async (error, hash) => {

          await Client.findByIdAndUpdate(clientData._id, {clientPassword:hash})
            .then(()=>{
              res.status(201).json('Password is updated');
            })
            .catch((err)=> {
              console.log(err);
              res.status(500).json({error:'Internal server error!'});
            });
        });
      });
    }else{

      await Hairdresser.findOne({email:email, passwordResetToken:token, expireTimeToken:{$gt:now}}).then(async (hairdData)=>{
        if(hairdData){
          bcrypt.genSalt(10, (error, salt) => {
            bcrypt.hash(newPassword, salt, async (error, hash) => {

              await Hairdresser.findByIdAndUpdate(hairdData._id, {hairdPassword:hash})
                .then(()=>{
                  res.status(201).json('Password is updated');
                })
                .catch((err)=> {
                  console.log(err);
                  res.status(500).json({error:'Internal server error!'});
                });
            });
          });
        }else {
          res.status(401).json({error:'token or email does not exist'});
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

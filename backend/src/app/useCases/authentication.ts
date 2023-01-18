import { Request, Response } from 'express';
import { Hairdresser } from '../models/Hairdresser';
import { Client } from '../models/Client';
import bcrypt from 'bcryptjs';


export async function authentication(req: Request, res:Response){

  const username = req.body.username.replace(/\s+/g, '-');
  const password = req.body.password;

  const clientExist = await Client.findOne().where('clientName').equals(username);
  const hairdExist = await Hairdresser.findOne().where('hairdName').equals(username);


  if(clientExist){
    bcrypt.compare(password, clientExist.clientPassword, (error, batem)=>{
      if(batem){
        res.status(200).json(clientExist);
      }
      else {
        res.status(500).json({error:'user or password is not exist'});
      }
    });
  }else{
    if(!hairdExist){
      res.status(500).json({error:'user or password is not exist'});
    }else{
      bcrypt.compare(password, hairdExist.hairdPassword, (error, batem)=>{
        if(batem){
          res.status(200).json(hairdExist);
        }
        else {
          res.status(500).json({error:'user or password is not exist'});
        }
      });
    }
  }
}

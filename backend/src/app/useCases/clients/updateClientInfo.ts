import { Request, Response } from 'express';
import { Client } from '../../models/Client';
import bcrypt from 'bcryptjs';

interface userInfo{
  clientName?: string,
  email?:string,
  clientPassword?:string

}

export async function updateClientInfo(req: Request, res:Response){

  const username = req.params.user.replace(/\s+/g, '-');
  const infos:userInfo = req.body;
  infos.clientName = infos.clientName?.replace(/\s+/g, '-');

  try{
    if(infos.clientPassword){
      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(infos.clientPassword!, salt, async (error, hash) => {

          infos.clientPassword= hash;

          await Client.findOneAndUpdate({clientName: username}, infos).then((data)=>{
            res.status(201).json(data);
          }).catch((err)=>{
            console.log(err);
            res.status(500).json({error:'Internal Server Error!'});
          });
        });
      });
    }else{
      await Client.findOneAndUpdate({clientName: username}, infos).then((data)=>{
        res.status(201).json(data);
      }).catch((err)=>{
        console.log(err);
        res.status(500).json({error:'Internal Server Error!'});
      });

      res.status(200).json(infos);
    }

  }catch(error){

    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});

  }
}

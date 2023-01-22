import { Request, Response } from 'express';
import { Client } from '../../models/Client';
import { Hairdresser } from '../../models/Hairdresser';
import bcrypt from 'bcryptjs';

interface userInfo{
  clientName?: string,
  email?:string,
  clientPassword?:string
}

export async function updateClientInfo(req: Request, res:Response){

  const username = req.params.clientName.replace(/\s+/g, '-');
  const infos:userInfo = req.body;
  infos.clientName = infos.clientName?.replace(/\s+/g, '-');


  const hairdExist = await Hairdresser.findOne({$or:[{ clientName: infos.clientName},{email:infos.email}]});
  const clientExist = await Client.findOne({$or:[{ clientName: infos.clientName},{email:infos.email}]});

  try{
    if(hairdExist || clientExist){
      res.status(500).json('Username or email is alredy in use');
    }else{
      if(infos.clientPassword){
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(infos.clientPassword!, salt, async (error, hash) => {

            infos.clientPassword= hash;

            await Client.findOneAndUpdate({clientName: username}, infos).then(()=>{
              res.status(200).json(infos);
            }).catch((err)=>{
              console.log(err);
              res.status(500).json({error:'Internal Server Error!'});
            });
          });
        });
      }else{
        await Client.findOneAndUpdate({clientName: username}, infos).then(()=>{
          res.status(200).json(infos);
        }).catch(err => res.status(500).json({error:'Internal Server Error!'}));

      }
    }

  }catch(error){

    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});

  }
}

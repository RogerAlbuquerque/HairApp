import { Request, Response } from 'express';
import {Client} from '../../models/Client';
import { Hairdresser } from '../../models/Hairdresser';
import bcrypt from 'bcryptjs';

interface clientInfo{
  clientName:string,
  email:string,
  clientPassword:string,
}
export async function createClient(req: Request, res:Response){
  const clientData:clientInfo = req.body;
  clientData.clientName = clientData.clientName.replace(/\s+/g, '-');

  const hairdExist = await Hairdresser.findOne({$or:[{ hairdName: clientData.clientName},{email:clientData.email}]});
  const clientExist = await Client.findOne({$or:[{ clientName: clientData.clientName},{email:clientData.email}]});


  try{
    if(hairdExist || clientExist){
      res.status(500).json({error:'user or email is already in use'});
    }else if((clientData.clientName == '') || (clientData.clientPassword == '')){
      res.status(500).json({error:'Error: user or password is empty'});
    }else{
      try{
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(clientData.clientPassword, salt, async (error, hash) => {

            clientData.clientPassword = hash;
            clientData.clientName = clientData.clientName.replace(/\s+/g, '-');

            const client = await Client.create(clientData);

            res.status(201).json(client);
          });
        });
      }catch(error){
        console.log(error);
        res.status(201).json({error:'Internal Server Error!'});
      }

    }

  }catch(error){
    console.log(error);
    res.status(201).json({error:'Internal Server Error!'});

  }
}

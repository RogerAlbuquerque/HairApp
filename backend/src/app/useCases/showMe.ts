import { Request, Response } from 'express';
import { Client } from '../models/Client';
import { Hairdresser } from '../models/Hairdresser';


export async function showMe(req: Request, res:Response){
  const userId = req.params.id;

  const hairdExist = await Hairdresser.findById(userId);
  const clientExist = await Client.findById(userId);

  try{
    if(hairdExist && !clientExist){
      res.status(200).json(hairdExist);
    }else if(!hairdExist && clientExist){
      res.status(200).json(clientExist);
    }

  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}
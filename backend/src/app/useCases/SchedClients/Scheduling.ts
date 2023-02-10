import { Request, Response } from 'express';
import { Hairdresser } from '../../models/Hairdresser';
import { SchedClient } from '../../models/SchedClient';
import { Client } from '../../models/Client';

interface scheduleInfo {
  hairdresserId: string;
  clientId: string;
  day: 'SEG' | 'TER' | 'QUA' | 'QUI' | 'SEX' | 'SAB' | 'DOM';
  clientHour:{
    hour:number,
    minute:number
  };
  status?:'PENDING' | 'CONFIRMED' | 'CANCELED';
}

export async function scheduling(req: Request, res:Response){
  const userInfo:scheduleInfo = req.body;

  const hairdresserId = await Hairdresser.findById(userInfo.hairdresserId);
  const clientId = await Client.findById(userInfo.clientId);
  const schedExist = await SchedClient.find({hairdresserId:userInfo.hairdresserId, clientId:userInfo.clientId});

  try{
    if(schedExist.length > 0){
      res.status(401).json({msg:'You already scheduled with this hairdresser'});
    }else if(hairdresserId && clientId){
      await SchedClient.create(userInfo);
      res.status(201).json(userInfo);
    }
    else{
      res.status(401).json({msg:'Hairdresser or Client does not exist'});
    }

  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

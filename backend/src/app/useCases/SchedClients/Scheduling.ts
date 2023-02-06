import { Request, Response } from 'express';
import { Hairdresser } from '../../models/Hairdresser';
import { SchedClient } from '../../models/SchedClient';

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

  try{
    if(hairdresserId){
      await SchedClient.create(userInfo);
      res.status(201).json(userInfo);
    }

  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

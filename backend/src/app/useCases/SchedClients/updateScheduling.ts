import { Request, Response } from 'express';
import { SchedClient } from '../../models/SchedClient';

interface scheduleInfo {
  day?: 'SEG' | 'TER' | 'QUA' | 'QUI' | 'SEX' | 'SAB' | 'DOM';
  clientHour?:{
    hour?:number,
    minute?:number
  };
  status?:'PENDING' | 'CONFIRMED' | 'CANCELED';
}

export async function updateScheduling(req: Request, res:Response){

  const userInfo:scheduleInfo = req.body;

  const schedClientExist = await SchedClient.findOne({clientId:req.params.clientId,hairdresserId:req.params.hairdId});

  if(schedClientExist){
    try{

      await SchedClient.findOneAndUpdate({clientId:schedClientExist.clientId }, userInfo );

      res.status(200).json(userInfo);

    }catch(error){

      console.log(error);
      res.status(500).json({error:'Internal Server Error!'});

    }
  }else{
    res.status(200).json('Unscheduled Client');
  }

}

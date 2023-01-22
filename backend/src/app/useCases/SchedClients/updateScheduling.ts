import { Request, Response } from 'express';
import { SchedClient } from '../../models/SchedClient';
import { Hairdresser } from '../../models/Hairdresser';

interface scheduleInfo {
  _id: string;
  day?: 'SEG' | 'TER' | 'QUA' | 'QUI' | 'SEX' | 'SAB' | 'DOM';
  clientHour?:{
    hour?:number,
    minute?:number
  };
  status?:'PENDING' | 'CONFIRMED' | 'CANCELED';
}

export async function updateScheduling(req: Request, res:Response){

  const userInfo:scheduleInfo = req.body;

  const schedClientExist = await SchedClient.findById(userInfo._id);
  // const schedClient = await Hairdresser.findById(userInfo.hairdresserId);

  if(schedClientExist){
    try{

      await SchedClient.findByIdAndUpdate(userInfo._id, userInfo);

      res.status(200).json(userInfo);

    }catch(error){

      console.log(error);
      res.status(500).json({error:'Internal Server Error!'});

    }
  }else{
    res.status(200).json('Cliente não existe ');
  }

}

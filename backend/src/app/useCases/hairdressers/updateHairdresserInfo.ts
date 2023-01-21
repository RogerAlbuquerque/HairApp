import { Request, Response } from 'express';
import { Hairdresser } from '../../models/Hairdresser';

interface userInfo{
  hairdName?: string,
  email?:string,
  address?:string,
  prices?:{
    hairPrice?:number,
    beardPrice?:number
  },
  workDaysWeek?: ['SEG' | 'TER'| 'QUA'| 'QUI'| 'SEX'| 'SAB'| 'DOM'];
  workingTime?:{
    open?:{
      hour?:number,
      minute?:number
    },
    closse?:{
      hour?:number,
      minute?:number
    }
  }

}

export async function updateHairdresserInfo(req: Request, res:Response){

  const username = req.params.user.replace(/\s+/g, '-');
  const infos:userInfo = req.body;
  try{

    const hairdresser = await Hairdresser.findOneAndUpdate({hairdName: username},{infos});
    res.status(200).json(hairdresser);

  }catch(error){

    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});

  }
}

import { Request, Response } from 'express';
import { Hairdresser } from '../../models/Hairdresser';
import bcrypt from 'bcryptjs';

interface userInfo{
  hairdName?: string,
  hairdPassword:string,
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
    close?:{
      hour?:number,
      minute?:number
    }
  }

}

export async function updateHairdresserInfo(req: Request, res:Response){
  const infos:userInfo = req.body;
  infos.hairdName = infos.hairdName?.replace(/\s+/g, '-');


  const hairdExist = await Hairdresser.findById(req.headers.userId);

  try{
    if(!hairdExist){
      res.status(500).json('User does not exist');
    }else{
      if(infos.hairdPassword){
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(infos.hairdPassword!, salt, async (error, hash) => {

            infos.hairdPassword= hash;

            await Hairdresser.findByIdAndUpdate(req.headers.userId, infos).then(()=>{
              res.status(200).json(infos);
            }).catch((err)=>{
              console.log(err);
              res.status(500).json({error:'Internal Server Error!'});
            });

          });

        });

      }else{
        await Hairdresser.findByIdAndUpdate(req.headers.userId, infos).then(()=>{
          res.status(200).json(infos);
        }).catch((err)=>{
          console.log(err);
          res.status(500).json({error:'Internal Server Error!'});
        });
      }

    }

  }catch(error){

    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});

  }
}

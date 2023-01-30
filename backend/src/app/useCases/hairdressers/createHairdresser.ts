import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { Hairdresser } from '../../models/Hairdresser';
import { Client } from '../../models/Client';
interface userInfo{
  hairdName: string,
  email:string,
  address:string,
  hairdPassword: string,
  prices:{
    hairPrice:number,
    beardPrice:number
  },
  workDaysWeek: ['SEG' | 'TER'| 'QUA'| 'QUI'| 'SEX'| 'SAB'| 'DOM'];
  workingTime:{
    open:{
      hour:number,
      minute:number
    },
    close:{
      hour:number,
      minute:number
    }
  }
}

export async function createHairdresser(req: Request, res:Response){
  const hairdresserData:userInfo = req.body;
  hairdresserData.hairdName = hairdresserData.hairdName.replace(/\s+/g, '-');
  const hairdExist = await Hairdresser.findOne({$or: [ {hairdName: hairdresserData.hairdName },{ email:hairdresserData.email } ] });
  const clientExist = await Client.findOne({$or:[{clientName: hairdresserData.hairdName },{email:hairdresserData.email}]});


  try{
    if(clientExist || hairdExist || !hairdresserData.hairdName || !hairdresserData.hairdPassword){
      res.status(500).json({error:'user or email is already in use'});
    }else{
      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(hairdresserData.hairdPassword, salt, async (error, hash) => {

          hairdresserData.hairdPassword = hash;
          hairdresserData.hairdName = hairdresserData.hairdName.replace(/\s+/g, '-');

          const hairdresser = await Hairdresser.create(hairdresserData);
          res.status(201).json(hairdresser);
        });
      });
    }

  }catch(error){
    console.log(error);
    res.status(201).json({error:'Internal Server Error!'});

  }
}

import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { Hairdresser } from '../../models/Hairdresser';

export async function createHairdresser(req: Request, res:Response){
  const hairdresserData = req.body;
  const hairdExist = await Hairdresser.findOne({ $or: [ { hairdName: hairdresserData.hairdName }, { email:hairdresserData.email } ] });


  try{
    if(hairdExist){
      res.status(500).json({error:'hairdName or email is already in use'});
    }else{
      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(hairdresserData.hairdPassword, salt, async (error, hash) => {
          hairdresserData.hairdPassword = hash;
          // const hairdresser = await Hairdresser.create(hairdresserData);
          res.status(201).json(hairdresserData);
        });
      });
    }

  }catch(error){
    console.log(error);
    res.status(201).json({error:'Internal Server Error!'});

  }
}

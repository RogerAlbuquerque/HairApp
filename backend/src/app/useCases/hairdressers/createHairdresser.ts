import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { Hairdresser } from '../../models/Hairdresser';

export async function createHairdresser(req: Request, res:Response){
  const hairdresserData = req.body;
  try{
    bcrypt.genSalt(10, (error, salt) => {
      bcrypt.hash(hairdresserData.hairdPassword, salt, async (error, hash) => {
        hairdresserData.hairdPassword = hash;
        const hairdresser = await Hairdresser.create(hairdresserData);
        res.status(201).json(hairdresser);
      });

    });

  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

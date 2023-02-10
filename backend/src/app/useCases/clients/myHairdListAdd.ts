import { Request, Response } from 'express';
import { Client } from '../../models/Client';
import { Hairdresser } from '../../models/Hairdresser';


export async function myHairdList(req: Request, res:Response){

  const hairdName = req.body.hairdName;

  const hairdExist = await Hairdresser.findOne({hairdName}, '-hairdPassword');

  if(hairdExist){
    const clientInfo = await Client.findById(req.headers.userId);
    const newHaird = clientInfo?.hairdressers;
    newHaird?.push(hairdExist._id);


    await Client.findByIdAndUpdate(req.headers.userId, {hairdressers:newHaird});
    res.status(200).json(newHaird);

  }else{
    res.status(500).json('Hairdresser name does not exist');
  }

}

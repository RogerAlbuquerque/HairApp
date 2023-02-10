import { Request, Response } from 'express';
import { Client } from '../../models/Client';
import { Hairdresser } from '../../models/Hairdresser';


export async function myHairdList(req: Request, res:Response){

  const hairdName = req.body.hairdName;

  const hairdExist = await Hairdresser.findOne({hairdName}, '-hairdPassword');

  if(hairdExist){
    try{
      const clientInfo = await Client.findById(req.headers.userId);
      if(clientInfo){
        try{
          const newHaird = clientInfo.hairdressers;
          if(newHaird?.includes(hairdExist._id)){
            res.status(401).json('Hairdresser already exist on list of this client');
          }else newHaird?.push(hairdExist._id);

          await Client.findByIdAndUpdate(req.headers.userId, {hairdressers:newHaird});
          res.status(200).json(newHaird);
        }catch(error){
          console.log(error);
          res.status(500).json('Internal server error');
        }

      }else{
        res.status(401).json('Client is not found');
      }
    }
    catch(error){
      res.status(401).json('Internal server error or user have is not logged');
    }
  }else{
    res.status(401).json('Hairdresser name does not exist');
  }
}

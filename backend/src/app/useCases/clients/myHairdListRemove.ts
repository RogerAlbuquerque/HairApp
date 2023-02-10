import { Request, Response } from 'express';
import { Client } from '../../models/Client';
import { Hairdresser } from '../../models/Hairdresser';


export async function myHairdListRemove(req: Request, res:Response){

  const hairdName = req.body.hairdName;

  const hairdExist = await Hairdresser.findOne({hairdName}, '-hairdPassword');

  if(hairdExist){
    try{
      const clientInfo = await Client.findById(req.headers.userId);
      if(clientInfo){
        try{
          const removeHaird = clientInfo.hairdressers;
          if(removeHaird && removeHaird.includes(hairdExist._id)){
            const hairdIndex = removeHaird.indexOf(hairdExist._id);

            if(hairdIndex != -1){
              removeHaird.splice(hairdIndex,1);
              await Client.findByIdAndUpdate(req.headers.userId, {hairdressers:removeHaird});
              res.status(401).json('removed: ' + hairdExist._id);
            }
            else{
              res.status(401).json('Hairdresser Was not found on list of this client');
            }
          }else {
            res.status(401).json('Hairdresser does not exist on list of this client');
            removeHaird?.push(hairdExist._id);
          }


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

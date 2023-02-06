import { Request, Response } from 'express';
import { Client } from '../../models/Client';
import { Hairdresser } from '../../models/Hairdresser';

export async function myHairdList(req: Request, res:Response){

  const hairdName = req.body.hairdName.replace(/\s+/g, '-');

  const hairdExist = await Hairdresser.findOne({hairdName});

  if(hairdExist){
    await Client.findByIdAndUpdate(req.headers.userId, {hairdressers:hairdExist._id}).populate({path:'hairdressers',
      select: '_id hairdName address email prices workDaysWeek workingTime'
    }).then((haird) =>{
      res.status(200).json(haird);
    }).catch((error)=>{

      console.log(error);
      res.status(500).json({error:'Internal Server Error!'});
    }
    );

  }else{
    res.status(500).json('Hairdresser name does not exist');
  }

}

import { Request, Response } from 'express';
import {Client} from '../../../models/Client';


export async function showClient(req: Request, res:Response){

  try{

    const client = await Client.find().populate({path:'hairdressers',
      select: 'hairdName address email prices workDaysWeek workingTime'
    });
    res.status(200).json(client);

  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

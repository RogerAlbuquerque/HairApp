import { Request, Response } from 'express';
import { SchedClient } from '../../models/SchedClient';


export async function deleteMySchedule(req: Request, res:Response){
  try{

    const Schedclient = await SchedClient.find().where('clientId').equals(req.headers.userId).findByIdAndDelete(req.params.schedHairdId);
    res.status(200).json(Schedclient);

  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

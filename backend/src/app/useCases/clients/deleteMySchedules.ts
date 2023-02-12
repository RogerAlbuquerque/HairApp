import { Request, Response } from 'express';
import { SchedClient } from '../../models/SchedClient';


export async function deleteMySchedule(req: Request, res:Response){
  try{

    const Schedclient = await SchedClient.findOneAndDelete({hairdresserId:req.params.schedHairdId, clientId:req.headers.userId});
    res.status(200).json(Schedclient);

  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

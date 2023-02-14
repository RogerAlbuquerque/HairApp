import { Request, Response } from 'express';
import { SchedClient } from '../../models/SchedClient';


export async function myScheduling(req: Request, res:Response){

  const ClientData = await SchedClient.find().where('clientId').equals(req.headers.userId);
  const HairdData = await SchedClient.find().where('hairdresserId').equals(req.headers.userId).populate('clientId', '-clientPassword', '-hairdressers');

  console.log(ClientData);
  try{
    if(ClientData.length > 0){
      res.status(200).json(ClientData);
    }else if(HairdData.length > 0){
      res.status(200).json(HairdData);
    }

  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

import { Request, Response } from 'express';
import { SchedClient } from '../../models/SchedClient';


export async function showMySchedClients(req: Request, res:Response){

  try{
    await SchedClient.find().where('hairdresserId').equals(req.headers.userId).populate({
      path:'clientId',
      select:'_id clientName email',
    }).then((haird) =>{
      res.status(200).json(haird);
    });

  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

import { Request, Response } from 'express';
import { SchedClient } from '../../models/SchedClient';


export async function showMyScheduleClients(req: Request, res:Response){
  const hairdresser = req.params.haird;
  try{

    await SchedClient.find().where('hairdresserId').equals(hairdresser).populate({
      path:'clientId',
      select:'clientName email',
    }).then((haird) =>{
      res.status(200).json(haird);
    });


  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

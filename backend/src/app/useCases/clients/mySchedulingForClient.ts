import { Request, Response } from 'express';
import { SchedClient } from '../../models/SchedClient';


export async function myScheduling(req: Request, res:Response){

  try{
    await SchedClient.find().where('clientId').equals(req.headers.userId).then((haird) =>{
      res.status(200).json(haird);
    });

  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

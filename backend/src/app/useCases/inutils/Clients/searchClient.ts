import { Request, Response } from 'express';
import { Client } from '../../../models/Client';


export async function searchClient(req: Request, res:Response){

  const infoUser = req.params.info.replace(/\s+/g, '-');
  try{

    const client = await Client.findOne({hairdName: infoUser});
    res.status(200).json(client);

  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

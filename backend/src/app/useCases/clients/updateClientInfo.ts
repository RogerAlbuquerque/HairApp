import { Request, Response } from 'express';
import { Client } from '../../models/Client';

interface userInfo{
  clientName?: string,
  email?:string,
  clientPassword:string

}

export async function updateClientInfo(req: Request, res:Response){

  const username = req.params.user.replace(/\s+/g, '-');
  const infos:userInfo = req.body;
  infos.clientName = infos.clientName?.replace(/\s+/g, '-');

  try{

    await Client.findOneAndUpdate({clientName: username}, infos);

    res.status(200).json(infos);

  }catch(error){

    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});

  }
}

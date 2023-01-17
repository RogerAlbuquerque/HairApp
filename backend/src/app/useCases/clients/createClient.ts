import { Request, Response } from 'express';
import {Client} from '../../models/Client';
import bcrypt from 'bcryptjs';

export async function createClient(req: Request, res:Response){
  const clientData = req.body;
  try{
    bcrypt.genSalt(10, (error, salt) => {
      bcrypt.hash(clientData.clientPassword, salt, async (error, hash) => {
        clientData.clientPassword = hash;
        const client = await Client.create(clientData);
        res.status(201).json(client);
      });
    });
  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

import { Request, Response } from 'express';
import { Hairdresser } from '../models/Hairdresser';
import { Client } from '../models/Client';


export async function searchHairdresser(req: Request, res:Response){

  const infoUser = req.params.info.replace(/\s+/g, '-');
  try{

    console.log('asdf');

  }catch(error){
    console.log('asdf');
  }
}

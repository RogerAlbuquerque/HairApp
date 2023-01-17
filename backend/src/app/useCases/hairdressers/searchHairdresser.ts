import { Request, Response } from 'express';
import { Hairdresser } from '../../models/Hairdresser';


export async function searchHairdresser(req: Request, res:Response){

  const infoUser = req.params.info.replace(/\s+/g, '-');
  try{

    console.log('Esse é o params: ', req.params.info);
    console.log('Esse é o infoUser: ', infoUser);

    const hairdresser = await Hairdresser.findOne({hairdName: infoUser});
    res.status(200).json(hairdresser);

  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

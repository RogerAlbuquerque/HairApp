import { Request, Response } from 'express';
import { Hairdresser } from '../../../models/Hairdresser';



export async function deleteHairdresser(req: Request, res:Response){

  try{

    const hairdresser = await Hairdresser.findByIdAndDelete(req.params.id);
    res.status(200).json(hairdresser);

  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

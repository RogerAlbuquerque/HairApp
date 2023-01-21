import { Request, Response } from 'express';
import { Hairdresser } from '../../models/Hairdresser';


export async function showAllHairdresser(req: Request, res:Response){

  try{

    await Hairdresser.find().then((haird) =>{
      res.status(200).json(haird);
    });


  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

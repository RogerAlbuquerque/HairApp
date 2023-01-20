import { Request, Response } from 'express';
import { Client } from '../../models/Client';
import { Hairdresser } from '../../models/Hairdresser';
import bcrypt from 'bcryptjs';



export async function login(req: Request, res:Response){

  const user = req.body.user.replace(/\s+/g, '-');
  const pass = req.body.password;
  try{

    // console.log('Esse é o params: ', req.params.info);
    // console.log('Esse é o infoUser: ', infoUser);


    const clientExist = await Client.findOne( {$or:[{clientName: user },{email:user}]});
    const hairdExist = await Hairdresser.findOne( {$or:[{hairdName: user },{email:user}]});

    if(clientExist){
      bcrypt.compare(pass, clientExist.clientPassword, (error, equal)=>{
        if(equal){
          res.status(200).json(clientExist);
        }else if(error) {
          console.log(error);
        }
      });

    }else if(hairdExist){
      bcrypt.compare(pass, hairdExist.hairdPassword, (error, equal)=>{
        if(equal){
          res.status(200).json(hairdExist);
        }else if(error) {
          console.log(error);
        }else{
          res.status(500).json({error:'Wrong or does not exist email/user or password'});
        }

      });
    }else  res.status(500).json({error:'Wrong or does not exist email/user or password'});

  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

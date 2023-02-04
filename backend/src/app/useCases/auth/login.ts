import { Request, Response } from 'express';
import { Client } from '../../models/Client';
import { Hairdresser } from '../../models/Hairdresser';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';


export async function login(req: Request, res:Response){

  const user = req.body.user.replace(/\s+/g, '-');
  const pass = req.body.password;
  try{

    // console.log('Esse é o params: ', req.params.info);
    // console.log('Esse é o infoUser: ', infoUser);


    const clientExist = await Client.findOne( {$or:[{clientName: user },{email:user}]});
    const hairdExist = await Hairdresser.findOne( {$or:[{hairdName: user },{email:user}]});

    if(clientExist){
      try{
        bcrypt.compare(pass, clientExist.clientPassword, (error, equal)=>{
          if(equal){

            // CRIAR TOKEN JWT
            const payload = {userId: clientExist._id};
            const secret = process.env.JWT_ACCESS;
            const token = jwt.sign(payload, secret!,{expiresIn:'7 days'});

            res.status(200).json({userId: clientExist._id, token,});
          }else if(error) {
            console.log(error);
          }else{
            res.status(401).json({error:'Wrong or does not exist email/user or password'});
          }
        });
      }catch(error){
        console.log(error);
        res.status(500).json({error:'Internal Server Error!'});
      }

    }else if(hairdExist){
      try{
        bcrypt.compare(pass, hairdExist.hairdPassword, (error, equal)=>{
          if(equal){


            // CRIAR TOKEN JWT
            const payload = {userId: hairdExist._id};
            const secret = process.env.JWT_ACCESS;
            const token = jwt.sign(payload, secret!,{expiresIn:'7 days'});

            res.status(200).json({userId:hairdExist._id, token,});

          }else if(error) {
            console.log(error);
          }else{
            res.status(401).json({error:'Wrong or does not exist email/user or password'});
          }

        });
      }catch(error){
        console.log(error);
        res.status(500).json({error:'Internal Server Error!'});
      }
    }else  res.status(500).json({error:'Wrong or does not exist email/user or password'});

  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error!'});
  }
}

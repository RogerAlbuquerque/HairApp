import { Request, Response , NextFunction} from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload{
  userId:string;
  iat:number;
  exp:number;
}

export default function verifyTokenJWT(req: Request, res:Response, next:NextFunction){
  const tokenExist = req.headers.authorization;
  const token = tokenExist && tokenExist.split(' ')[1];

  if (!token){
    return res.status(401).json({msg: 'Denied access'});
  }

  try{
    const secret = process.env.JWT_ACCESS;
    const {userId} = jwt.verify(token, secret!) as TokenPayload;

    req.headers.userId = userId;

    next();
  }
  catch(error){
    console.log(error);
  }
}

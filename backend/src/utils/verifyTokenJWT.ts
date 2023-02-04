import { Request, Response , NextFunction} from 'express';
import jwt from 'jsonwebtoken';



export default function verifyTokenJWT(req: Request, res:Response, next:NextFunction){
  const tokenExist = req.headers.authorization;
  const token = tokenExist && tokenExist.split(' ')[1];

  if (!token){
    return res.status(401).json({msg: 'Denied access'});
  }

  try{
    const secret = process.env.JWT_ACCESS;
    jwt.verify(token, secret!);

    next();
  }
  catch(error){
    console.log(error);
  }
}

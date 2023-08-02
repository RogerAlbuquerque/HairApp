import express from 'express';
import mongoose from 'mongoose';
import {router} from './router';


mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/cabeleireiroApp')
  .then(()=>{
    const app = express();
    const port = 3001;


    app.use((req,res, next) => {
      res.setHeader('Access-Control-Allow-Origin',  '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });

    app.use(express.json());
    app.use(router);


    app.listen(port, ()=> console.log('Server is running on localhost, in port ' + port));
  })
  .catch((error) => console.log('Error to connect on mongoDB: \n ', error));


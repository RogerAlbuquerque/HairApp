import express from 'express';
import mongoose from 'mongoose';
// import router from './router';

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017')
  .then(()=>{
    const app = express();
    const port = 3001;


    app.use((req,res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();

    });

    app.use(express.json());
    // app.use(router);


    app.listen(port, ()=> console.log(`server is running on: https://localhost:${port}`));
  })
  .catch((error) => console.log('Error to connect on mongoDB: \n ', error));


import {model, Schema} from 'mongoose';

export const SchedClient = model('SchedClient', new Schema({

  hairdresserID:{
    type:Schema.Types.ObjectId,
    required:false,
    ref:'Hairdresser',
  },

  clientId:{
    type:Schema.Types.ObjectId,
    required:false,
    ref:'Client',
  },

  day:{
    type: String,
    enum:['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
    required:true
  },

  clientHour:{
    required:true,
    type:[{
      hour:{
        type: String,
        required:true,
      },
      minute:{
        type: String,
        required:true,
      }
    }]
  },

  status:{
    type: String,
    enum:['PENDING', 'CONFIRMED', 'CANCELED'],
    required:true
  },


}));

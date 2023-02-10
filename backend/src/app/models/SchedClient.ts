import {model, Schema} from 'mongoose';

export const SchedClient = model('SchedClient', new Schema({


  hairdresserId:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'Hairdresser',
  },

  clientId:{
    type:Schema.Types.ObjectId,
    required:false,
    ref:'Client',
  },

  day:{
    type: String,
    enum:['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'],
    required:true
  },

  clientHour:{
    required:true,
    type:{
      hour:{
        type: String,
        required:true,
      },
      minute:{
        type: String,
        required:true,
      }
    }
  },

  status:{
    type: String,
    enum:['PENDING', 'CONFIRMED', 'CANCELED'],
    required:true,
    default: 'PENDING'
  },


}));

import {model, Schema} from 'mongoose';

export const Client = model('Client', new Schema({

  clientName:{
    type: String,
    required:true
  },

  email:{
    type: String,
    required: true
  },

  clientPassword:{
    type: String,
    required:true
  },

  userImage:{
    type: String,
    required:false,
    default: 'defaultImage.png',
  },

  hairdressers:{
    required:false,
    type:[{
      type:Schema.Types.ObjectId,
      required:false,
      ref:'Hairdresser',
    }]
  }

}));

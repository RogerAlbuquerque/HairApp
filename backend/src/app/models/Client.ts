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
    required:true,
    minlength: 8
  },

  passwordResetToken:{
    type: String,
    select:false,
  },

  expireTimeToken:{
    type: String,
    select: false
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

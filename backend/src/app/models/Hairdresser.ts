import {model, Schema} from 'mongoose';

export const Hairdresser = model('Hairdresser', new Schema({

  userImage:{
    type: String,
    required:false
  },

  hairdName:{
    type: String,
    required: true,
    unique: true,
  },

  address:{
    type: String,
    required: true
  },

  email:{
    type: String,
    required: true,
    unique: true,
  },

  hairdPassword:{
    type: String,
    required: true
  },

  passwordResetToken:{
    type: String,
    select:false,
  },

  expireTimeToken:{
    type: Date,
    select: false
  },

  prices:{
    required:true,
    type:{
      hairPrice:{
        type:Number,
        required:true,
      },
      beardPrice:{
        type:Number,
        required:true,
      }
    }
  },

  workDaysWeek:{
    type:{
      SEG:Boolean,
      TER:Boolean,
      QUA:Boolean,
      QUI:Boolean,
      SEX:Boolean,
      SAB:Boolean,
      DOM:Boolean,
    },
    required:true,
    unique: false,

  },

  workingTime:{
    required:true,
    type:{
      open:
        {
          hour:{
            type: String,
            required:true,
          },
          minute:{
            type: String,
            required:true,
          }
        },

      close:
        {
          hour:{
            type: String,
            required:true,
          },
          minute:{
            type: String,
            required:true,
          }
        },
    }
  },

}));

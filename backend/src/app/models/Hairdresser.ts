import {model, Schema} from 'mongoose';

export const Hairdresser = model('Hairdresser', new Schema({

  userImage:{
    type: String,
    required:false
  },

  hairdName:{
    type: String,
    required: true,
    unique: true
  },

  address:{
    type: String,
    required: true
  },

  email:{
    type: String,
    required: true,
    unique: true
  },

  hairdPassword:{
    type: String,
    required: true
  },

  prices:{
    required:true,
    type:[{
      hairPrice:{
        type:Number,
        required:true,
      },
      beardPrice:{
        type:Number,
        required:true,
      }
    }]
  },

  workDaysWeek:[
    {
      type:String,
      enum:['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'],
      required:true,
      unique: false,
      dropDups: true

    }
  ],

  workingTime:{
    required:true,
    type:[{
      open:[
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
      ],
      close:[
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
      ],
    }]
  },

}));

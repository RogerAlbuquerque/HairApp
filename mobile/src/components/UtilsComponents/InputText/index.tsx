import { InputStyle } from "./style";

interface inputProps {
  placeholder?: string,
  value?: string
  fontSize?:number
  font?:string
  width?:number | string,
  height?:number | string,
  isPassword?:boolean
  onChange?:()=> void;

}

export default function InputText({placeholder,value,onChange,isPassword,font, fontSize, width, height}: inputProps){
  return(
    <InputStyle
      placeholder={placeholder}
      value={value}
      maxLength={60}
      autoCorrect={false}
      secureTextEntry={isPassword ? isPassword : false}
      onChangeText={onChange}
      style={{fontFamily:font, fontSize:fontSize, width:width, height:height}}

    />

  );
}


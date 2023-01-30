import { InputStyle } from "./style";

interface inputProps {
  placeholder?: string,
  value?: string
  fontSize?:number
  font?:string
  width?:number | string,
  height?:number | string,
  isPassword?:boolean;
  isNumeric?:boolean;
  onChange?:(e:string)=> void;

}

export default function InputText({placeholder,value,onChange,isPassword,isNumeric,font, fontSize, width, height}: inputProps){
  return(
    <InputStyle
      placeholder={placeholder}
      value={value}
      maxLength={60}
      autoCorrect={false}
      secureTextEntry={isPassword ? isPassword : false}
      keyboardType={isNumeric ? 'numeric' : 'default'}
      onChangeText={onChange}
      style={{fontFamily:font, fontSize:fontSize, width:width, height:height}}

    />

  );
}


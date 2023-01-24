import { InputStyle } from "./style";

interface inputProps {
  placeholder: string,
  value?: string
  isPassword?:boolean
  onChange?:()=> void;

}

export default function InputText({placeholder,value,onChange,isPassword}: inputProps){
  return(
    <InputStyle
      placeholder={placeholder}
      value={value}
      maxLength={60}
      autoCorrect={false}
      secureTextEntry={isPassword ? isPassword : false}
      onChangeText={onChange}

    />

  );
}


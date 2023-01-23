import { InputStyle } from "./style";

interface inputProps {
  placeholder: string,
  value?: string
  onChange?:()=> void;

}

export default function InputText({placeholder,value,onChange}: inputProps){
  return(
    <InputStyle
      placeholder={placeholder}
      value={value}
      maxLength={60}
      autoCorrect={false}
      onChangeText={onChange}
    />

  );
}

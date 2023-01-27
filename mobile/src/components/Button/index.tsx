import { Text } from "../../utils/Text";
import { ButtonRegister } from "./style";

interface buttonProps{
  name:string;
  backColor:string
  size:number
  width?:number
  height?:number
  padding?:number
  onPress?:()=>void;
}

export default function Button({name, backColor,size,width, padding,height, onPress}:buttonProps){
  return(
    <ButtonRegister style={{backgroundColor: backColor, width:width, height:height, padding:padding}} onPress={onPress}>
       <Text style={{textAlign:'center'}} size={size} font={'Poppins'} weight={'Bold'} color={'#fff'}>{name}</Text>
    </ButtonRegister>
  );
}

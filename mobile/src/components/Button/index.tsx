import { Text } from "../../utils/Text";
import { ButtonRegister } from "./style";

interface buttonProps{
  name:string;
  backColor:string
  size:number
  width?:number
  height?:number
  padding?:number
  isActivate?:boolean;
  onPress?:(x:any)=>void;
}

export default function Button({name, backColor,size,width, padding,height, onPress, isActivate}:buttonProps){
  return(
    <ButtonRegister style={{backgroundColor: backColor, width:width, height:height, padding:padding, opacity: !isActivate ? 0.4 : 1}} onPress={onPress}>
       <Text style={{textAlign:'center'}} size={size} font={'Poppins'} weight={'Bold'} color={'#fff'}>{name}</Text>
    </ButtonRegister>
  );
}

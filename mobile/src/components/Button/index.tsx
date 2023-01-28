import { Text } from "../../utils/Text";
import { ButtonRegister } from "./style";

interface buttonProps{
  name:string;
  backColor?:string;
  letterCollor?:string;
  size:number;
  width?:number;
  height?:number;
  padding?:number;
  notActivate?:boolean;
  onPress?:(x:any)=>void;
}

export default function Button({name, backColor,size,width, padding,height,letterCollor, onPress, notActivate}:buttonProps){
  return(
    <ButtonRegister style={{backgroundColor: backColor, width:width, height:height, padding:padding, opacity: !notActivate ? 1 : 0.4}} onPress={onPress}>
       <Text style={{textAlign:'center'}} size={size} font={'Poppins'} weight={'Bold'} color={letterCollor? letterCollor : 'white'}>{name}</Text>
    </ButtonRegister>
  );
}

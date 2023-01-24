import { Text } from "../../utils/Text";
import { ButtonRegister } from "./style";

interface buttonProps{
  name:string;
  backColor:string
  onPress:()=>void;
}
export default function Button({name, backColor,onPress}:buttonProps){
  return(
    <ButtonRegister style={{backgroundColor: backColor}} onPress={onPress}>
       <Text size={15} font={'Poppins'} weight={'Bold'} color={'#fff'}>{name}:</Text>
    </ButtonRegister>
  );
}

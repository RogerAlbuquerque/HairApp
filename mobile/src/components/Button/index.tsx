import { Text } from "../../utils/Text";
import { ButtonRegister } from "./style";

interface buttonProps{
  name:string;
  backColor:string
}
export default function Button({name, backColor}:buttonProps){
  return(
    <ButtonRegister style={{backgroundColor: backColor}}>
       <Text size={15} font={'Poppins'} weight={'Bold'} color={'#fff'}>{name}:</Text>
    </ButtonRegister>
  );
}

import { ImageBackground } from "react-native";
import { BuyResume, CreditCardImage, HairdDataForm } from "./style";


export default function CreditCardRegister(){
  return(
    <ImageBackground source={require('../../../assets/imgs/bkg.jpg')}
    resizeMode="cover" style={{flex:1}}>

      <CreditCardImage>

      </CreditCardImage>

      <HairdDataForm>

      </HairdDataForm>

      <BuyResume>

      </BuyResume>

    </ImageBackground>

  );
}

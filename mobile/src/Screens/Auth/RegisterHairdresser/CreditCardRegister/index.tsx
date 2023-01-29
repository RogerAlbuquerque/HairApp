import { ImageBackground } from "react-native";
import InputText from "../../../../components/UtilsComponents/InputText";
import { Text } from "../../../../utils/Text";
import { BuyResume, CreditCardImage, HairdDataForm, UserInfo, ValidateNCvv } from "./style";


export default function CreditCardRegister(){
  return(
    <ImageBackground source={require('../../../../assets/imgs/bkg.jpg')}
    resizeMode="cover" style={{flex:1, padding:20}}>

      <CreditCardImage>

      </CreditCardImage>

      <HairdDataForm>
          <UserInfo>
           <Text size={20} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>Número do cartão:</Text>
           <InputText
           isNumeric={true}
           />
          </UserInfo>

          <ValidateNCvv>
            <UserInfo>
              <Text size={15} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'left'}}>Validade:</Text>
              <InputText
              isNumeric={true}
              width={120}
              />
            </UserInfo>

            <UserInfo>
              <Text size={15} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'left'}}>CVV:</Text>
              <InputText
                isNumeric={true}
                width={120}
              />
            </UserInfo>
          </ValidateNCvv>

          <UserInfo>
           <Text size={20} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>Nome do titular</Text>
           <InputText
           />
          </UserInfo>

          <UserInfo>
           <Text size={20} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>CPF</Text>
           <InputText
            isNumeric={true}
           />
          </UserInfo>

          <UserInfo>
           <Text size={20} font={'Poppins'} weight={'Bold'} color={'#F6C33E'} style={{textAlign:'center'}}>Selecione o número de parcelas</Text>
           <InputText
           />
          </UserInfo>

        </HairdDataForm>

      <BuyResume>

      </BuyResume>

    </ImageBackground>

  );
}

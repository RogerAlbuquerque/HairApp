import { useNavigation } from "@react-navigation/native";
import { Modal } from "react-native";
import { propsStack } from "../../utils/routeProps";
import { Text } from "../../utils/Text";
import Button from "../Button";
import { Buttons, CloseButton, Header, ModalBody, Overlay } from "./style";

interface modalProps{
  isModalVisible:boolean;
  setModalValue:()=>void;
}
export default function CancelClientModal({isModalVisible, setModalValue}:modalProps){

  // function navigationTo(where:string){
  //   navigation.navigate('SignIn')
  // }
  return(
    <Modal transparent animationType='fade' visible={isModalVisible}>
      <Overlay>

        <ModalBody >
          <CloseButton onPress={setModalValue}>
            <Text size={25} font={'Poppins'} weight={'Bold'} color={'red'}>X</Text>
          </CloseButton>
          <Header>
            <Text size={20} font={'Poppins'} weight={'Bold'} color={'#fff'} style={{textAlign:'center'}}>
              Tem certeza que deseja desmarcar o horário com o cliente:
            </Text>
            <Text size={25} font={'Poppins'} weight={'Bold'} color={'#00F0FF'} style={{textAlign:'center'}}>Antônio Jairo Alves</Text>
            <Text size={25} font={'Poppins'} weight={'Bold'} color={'white'} style={{textAlign:'center'}}>12:00 horas?</Text>
          </Header>

          <Buttons>
            <Button
              name={'Rejeitar cliente'}
              backColor='#C10000'
              width={220}
              padding={20}
              size={15}
              // onPress={}
            />

          </Buttons>
        </ModalBody>
      </Overlay>

    </Modal>
  )
}

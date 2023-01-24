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
export default function AuthModal({isModalVisible, setModalValue}:modalProps){
  const navigation = useNavigation<propsStack>();

  // function navigationTo(where:string){
  //   navigation.navigate('SignIn')
  // }
  return(
    <Modal transparent animationType='fade' visible={isModalVisible}>
      <Overlay>

        <ModalBody>
          <CloseButton onPress={setModalValue}>
            <Text size={25} font={'Poppins'} weight={'Bold'} color={'red'}>X</Text>
          </CloseButton>
          <Header>
            <Text size={20} font={'Poppins'} weight={'Bold'} color={'#fff'}>Criar conta:</Text>
          </Header>

          <Buttons>
            <Button
              name={'Como cliente'}
              backColor='#C10000'
              onPress={()=>navigation.navigate('RegisterClient')}
            />

            <Button
              name={'Como cabeleireiro'}
              backColor='#C10000'
              onPress={()=>navigation.navigate('SignIn')}

            />
          </Buttons>
        </ModalBody>
      </Overlay>

    </Modal>
  )
}

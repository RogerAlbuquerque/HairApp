import { useNavigation } from "@react-navigation/native";
import { Modal } from "react-native";
import { propsStack } from "../../../utils/routeProps";
import { Text } from "../../../utils/Text";
import Button from "../Button";
import { Buttons, CloseButton, Header, ModalBody, Overlay } from "./style";

interface modalProps{
  isModalVisible:boolean;
  setModalValue:()=>void;
}
export default function AuthModal({isModalVisible, setModalValue}:modalProps){
  const navigation = useNavigation<propsStack>();

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
              width={220}
              padding={20}
              size={15}
              marginBotton={42}
              onPress={()=>{
                setModalValue();
                navigation.navigate('RegisterClient')
              }}
            />
            <Button
              name={'Como cabeleireiro'}
              backColor='#C10000'
              width={220}
              padding={20}
              size={15}
              onPress={()=>{
                setModalValue();
                navigation.navigate('HairdRegister')
              }}
            />
          </Buttons>
        </ModalBody>
      </Overlay>
    </Modal>
  )
}

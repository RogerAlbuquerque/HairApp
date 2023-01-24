import { Modal } from "react-native";
import { Text } from "../../utils/Text";
import Button from "../Button";
import { Buttons, CloseButton, Header, ModalBody, Overlay } from "./style";

interface modalProps{
  isModalVisible:boolean;
  setModalValue:()=>void;
}
export default function AuthModal({isModalVisible, setModalValue}:modalProps){
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
            />

            <Button
              name={'Como cabeleireiro'}
              backColor='#C10000'
            />
          </Buttons>
        </ModalBody>
      </Overlay>

    </Modal>
  )
}

import { Modal } from "react-native";
import { Text } from "../../../utils/Text";
import Button from "../../UtilsComponents/Button";
import { Buttons, Header, ModalBody, Overlay } from "./style";

interface modalProps{
  isModalVisible:boolean;
  setModalValue:()=>void;
  title:string
  bodyText: string;
  typeModal:'error' | 'success' | '';
}
export default function AlertModal({isModalVisible, setModalValue, title, bodyText, typeModal}:modalProps){


  return(
    <Modal transparent animationType='fade' visible={isModalVisible}>
      <Overlay>
        <ModalBody style={{backgroundColor: typeModal == 'error' ? '#C10000' : '#3FC500'}}>
          <Header>
            <Text size={15} font={'Poppins'} weight={'Bold'} color={'#fff'} style={{textAlign:'center'}}>
             {title}
            </Text>
            <Text size={12} font={'Poppins'} weight={'Regular'} color={'#fff'} style={{textAlign:'center'}}>
              {bodyText}
            </Text>

          </Header>

          <Buttons>
            <Button
              name={'OK'}
              letterCollor="#fff"
              width={80}
              padding={2}
              size={20}
              onPress={setModalValue}
            />
          </Buttons>
        </ModalBody>
      </Overlay>

    </Modal>
  )
}

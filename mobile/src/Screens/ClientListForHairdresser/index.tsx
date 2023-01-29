import { useState } from 'react';
import { ImageBackground } from 'react-native';
import Button from '../../components/UtilsComponents/Button';
import CancelClientModal from '../../components/HairdComponents/CancelClientModal';
import ClientCardForHaders from '../../components/HairdComponents/ClientCardForHaders';
import HeaderComponent from '../../components/UtilsComponents/HeaderComponent';
import {Header, ButtonsForTypeClients, LineContainer, Line, ClientList} from './style';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../utils/routeProps';


export default function ClientListForHairdresser(){
  const navigation = useNavigation<propsStack>();
  const [buttonPendingClient,setButtonPendingClient] = useState(true);
  const [buttonConfirmedClient,setButtonConfirmedClient] = useState(true);

  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleButtonsStatusClients(whichButton:string){
    if(whichButton == 'PENDINGBUTTON'){
      buttonConfirmedClient && setButtonConfirmedClient(false);
      setButtonPendingClient(!buttonPendingClient)

    }
    else if(whichButton == 'CONFIRMEDBUTTON'){
      buttonPendingClient && setButtonPendingClient(false)
     setButtonConfirmedClient(!buttonConfirmedClient)
    }
  }

  function showModalToConfirmCancelClient(){
    setIsModalVisible(!isModalVisible);
  }

  return(
    <ImageBackground source={require('../../assets/imgs/backHome.png')}
    style={{flex: 1, paddingHorizontal:20}} resizeMode="cover">

      <CancelClientModal
        isModalVisible={isModalVisible}
        setModalValue={showModalToConfirmCancelClient}
      />

      <Header>
        <HeaderComponent
          onPressFunctionNavigate={ ()=>navigation.navigate('HairdConfig')}
        />
      </Header>

      <ButtonsForTypeClients style={{justifyContent:'space-between'}}>
          <Button
            name='Clients pendentes'
            backColor="#F6C33E"
            size={12}
            width={160}
            height={40}
            notActivate={buttonPendingClient}
            onPress={() => handleButtonsStatusClients('PENDINGBUTTON')}
          />

          <Button
          name='Clientes confirmados'
          backColor="#3FC500"
          size={12}
          width={160}
          height={40}
          notActivate={buttonConfirmedClient}
          onPress={() => handleButtonsStatusClients('CONFIRMEDBUTTON')}
        />
        </ButtonsForTypeClients>

      <LineContainer>
        <Line></Line>
      </LineContainer>

      <ClientList>
        <ClientCardForHaders status='CONFIRMED'onPressCancelButton={showModalToConfirmCancelClient}/>
        <ClientCardForHaders status='PENDING'onPressCancelButton={showModalToConfirmCancelClient}/>
        <ClientCardForHaders status='PENDING'onPressCancelButton={showModalToConfirmCancelClient}/>
        <ClientCardForHaders status='PENDING' onPressCancelButton={showModalToConfirmCancelClient}/>
        <ClientCardForHaders status='CONFIRMED'onPressCancelButton={showModalToConfirmCancelClient}/>
        <ClientCardForHaders status='CONFIRMED'onPressCancelButton={showModalToConfirmCancelClient}/>
      </ClientList>
    </ImageBackground>
  );
}

import { useContext, useState } from 'react';
import { FlatList, ImageBackground } from 'react-native';
import Button from '../../components/UtilsComponents/Button';
import CancelClientModal from '../../components/HairdComponents/CancelClientModal';
import ClientCardForHaders from '../../components/HairdComponents/ClientCardForHaird';
import HeaderComponent from '../../components/UtilsComponents/HeaderComponent';
import {Header, ButtonsForTypeClients, LineContainer, Line, ClientList} from './style';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../utils/routeProps';
import { UserInfoContext } from '../../context';
import HairdCard from '../../components/HairdComponents/HairdCard';
import { TypeSchedList } from '../../types/activeTypes/TypeSchedList';


export default function ClientListForHairdresser(){
  const navigation = useNavigation<propsStack>();
  const [buttonPendingClient,setButtonPendingClient] = useState(true);
  const [buttonConfirmedClient,setButtonConfirmedClient] = useState(true);
  const {handleAlertModal,mySchedList} = useContext(UserInfoContext);


  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleButtonsStatusClients(whichButton:string){

      if(whichButton == 'PENDINGBUTTON'){
        setButtonPendingClient(!buttonPendingClient)
      }
      if(whichButton == 'CONFIRMEDBUTTON'){
        setButtonConfirmedClient(!buttonConfirmedClient)
      }
  }

  function showModalToConfirmCancelClient(){
    setIsModalVisible(!isModalVisible);
  }


    let pendingClient = Array<TypeSchedList>() ;
    let confirmedClient= Array<TypeSchedList>();
    let activeClients= Array<TypeSchedList>();

    if (mySchedList != 'Lista vazia'){
     pendingClient= mySchedList.filter(client=> client.status == 'PENDING');
     confirmedClient= mySchedList.filter(client => client.status == 'CONFIRMED' );
     activeClients= mySchedList.filter(client => ((client.status == 'CONFIRMED') || (client.status == 'PENDING')) );
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
          notActivate={!buttonPendingClient}
          onPress={() => handleButtonsStatusClients('PENDINGBUTTON')}
        />

        <Button
          name='Clientes confirmados'
          backColor="#3FC500"
          size={12}
          width={160}
          height={40}
          notActivate={!buttonConfirmedClient}
          onPress={() => handleButtonsStatusClients('CONFIRMEDBUTTON')}
          // onPress={show}
        />
      </ButtonsForTypeClients>

      <LineContainer>
        <Line></Line>
      </LineContainer>

       {mySchedList != 'Lista vazia' &&
       <FlatList
          data={
            buttonPendingClient && buttonConfirmedClient  ? activeClients   :
            buttonPendingClient && !buttonConfirmedClient ? pendingClient   :
            !buttonPendingClient && buttonConfirmedClient ? confirmedClient : mySchedList
          }
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={hairdId => hairdId._id}
          renderItem={({item}) =>(
            <HairdCard
              userId={item.clientId._id}
              userName={item.clientId.clientName}
              clientHour={item.clientHour}
              status={item.status}
            />

          )}
        />}
    </ImageBackground>
  );
}

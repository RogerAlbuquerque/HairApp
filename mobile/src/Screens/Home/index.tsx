import { ImageBackground, FlatList, ActivityIndicator } from "react-native";
import Button from "../../components/UtilsComponents/Button";
import HairdCard from "../../components/HairdComponents/HairdCard";
import HeaderComponent from '../../components/UtilsComponents/HeaderComponent'
import InputText from "../../components/UtilsComponents/InputText";
import { Header, SearcHairdInput, SearchButton, LineContainer, Line } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../utils/routeProps';
import React, {useContext, useEffect, useState } from 'react';
import { UserInfoContext } from '../../context';
import { api } from "../../utils/api";

export default function Home(){
  const {navigate} = useNavigation<propsStack>();
  const [isAwaitingSearchReponse,setIsAwaitingSearchReponse]=useState(false);
  const [searchHairdresser, setSearchHairdresser] = useState('');
  // const [mySchedList, setMySchedList] = useState([{} as TypeSchedList]);
  const {clientInfo, handleClientInfoState,handleAlertModal,mySchedList} = useContext(UserInfoContext);

  async function addHairdOnMyList(){
    if(searchHairdresser == ''){
      return handleAlertModal('É preciso passar o nome de um cabeleireiro','','error')
    }
    try{
      setIsAwaitingSearchReponse(true)
      await api.put('/client/addHairdresser/',{hairdName:searchHairdresser})
      const clientUpdated = await api.get('/me')
      handleClientInfoState(clientUpdated.data)
      return handleAlertModal('Cabeleireiro adicionado a sua lista','','success')
    }
    catch(error){
      return handleAlertModal('Não foi encontrado cabeleireiro com esse nome',' Tente mudar algo no nome, ele precisa ser exatamente igual ao que o cabeleireiro cadastrou','error')
    }
    finally{
      setIsAwaitingSearchReponse(false);
    }
  }

  return(
    <ImageBackground source={require('../../assets/imgs/backHome.png')}
    style={{flex: 1, paddingHorizontal:20}} resizeMode="cover">
      <Header>
        <HeaderComponent
          onPressFunctionNavigate={ ()=>navigate('ClientConfig')}
        />
      </Header>
      <SearcHairdInput>
        <InputText
          placeholder='Nome do cabeleireiro'
          font="Poppins-Bold"
          fontSize={20}
          width={'100%'}
          height= {50}
          onChange={(value) => setSearchHairdresser(value)}
        />
      </SearcHairdInput>

      <SearchButton>
        {!isAwaitingSearchReponse ?
          <Button
            name="Buscar"
            backColor="#424242"
            size={22}
            width={130}
            height={60}
            marginBotton={25}
            onPress={addHairdOnMyList}
          />
          :
      <ActivityIndicator color="#fff" size="large"/>
      }
      </SearchButton>

      <LineContainer>
        <Line></Line>
      </LineContainer>

        <FlatList
          data={clientInfo.hairdressers}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={hairdId => hairdId._id}
          renderItem={({item}) =>(
            <HairdCard
              hairdId={item._id}
              hairdName={item.hairdName!}
              workingTimeOpen={item.workingTime.open}
              workingTimeClose={item.workingTime.close}
              hairPrice={item.prices.hairPrice}
              beardPrice={item.prices.beardPrice}
              email={item.email}
              address={item.address}
              status={(mySchedList[0] && mySchedList) && item._id == mySchedList[0].hairdresserId ? mySchedList[0].status : ''}
              clientHour={(mySchedList[0] && mySchedList) && item._id == mySchedList[0].hairdresserId ? mySchedList[0].clientHour :''}
              schedDay={(mySchedList[0] && mySchedList) && item._id == mySchedList[0].hairdresserId ? mySchedList[0].day : ''}
            />
          )}
        />
    </ImageBackground>
  );
}

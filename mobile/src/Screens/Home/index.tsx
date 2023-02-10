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
  const [isAwaitingSearchReponse,setIsAwaitingLoginReponse]=useState(false);
  const [searchHairdresser, setSearchHairdresser] = useState('');
  const {clientInfo, handleClientInfoState,handleAlertModal} = useContext(UserInfoContext);


  function show(){
    console.log(api.defaults.headers.common['Authorization'])
  }
async function addHairdOnMyList(){
  if(searchHairdresser == ''){
    return handleAlertModal('É preciso passar o nome de um cabeleireiro','','error')
  }
  try{
    setIsAwaitingLoginReponse(true)
    await api.put('/client/addHairdresser/',{hairdName:searchHairdresser})
    const clientUpdated = await api.get('/me')
    handleClientInfoState(clientUpdated.data)
  }
  catch(error){
    return handleAlertModal('Não foi encontrado cabeleireiro com esse nome',' Tente mudar algo no nome, ele precisa ser exatamente igual ao que o cabeleireiro cadastrou','error')
  }
  finally{
    setIsAwaitingLoginReponse(false);
  }
}

  useEffect(()=>{

  },[])
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
        {!isAwaitingSearchReponse ?<Button
          name="Buscar"
          backColor="#424242"
          size={22}
          width={130}
          height={60}
          marginBotton={25}
          onPress={show}
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
              hairdName={item.hairdName!}
              workingTimeOpen={item.workingTime.open}
              workingTimeClose={item.workingTime.close}
              hairPrice={item.prices.hairPrice}
              beardPrice={item.prices.beardPrice}
              email={item.email}
              address={item.address}
              // status={item.status}
            />

          )}
        />
    </ImageBackground>
  );
}

import { ImageBackground, FlatList } from "react-native";
import Button from "../../components/UtilsComponents/Button";
import HairdCard from "../../components/HairdComponents/HairdCard";
import HeaderComponent from '../../components/UtilsComponents/HeaderComponent'
import InputText from "../../components/UtilsComponents/InputText";
import { Header, SearcHairdInput, SearchButton, HairdList,LineContainer, Line } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../utils/routeProps';
import React, { useState, useContext } from 'react';
import { UserInfoContext } from '../../context';

export default function Home(){
  const navigation = useNavigation<propsStack>();
  const {clientInfo,handleClientInfoState} = useContext(UserInfoContext);

function show(){
  console.log(clientInfo.hairdressers)
}

  return(
    <ImageBackground source={require('../../assets/imgs/backHome.png')}
    style={{flex: 1, paddingHorizontal:20}} resizeMode="cover">
      <Header>
        <HeaderComponent
          onPressFunctionNavigate={ ()=>navigation.navigate('ClientConfig')}
          userName={clientInfo.clientName!}
        />
      </Header>
      <SearcHairdInput>
        <InputText
          placeholder='Nome do cabeleireiro'
          font="Poppins-Bold"
          fontSize={20}
          width={'100%'}
          height= {50}
        />
      </SearcHairdInput>

      <SearchButton>
        <Button
          name="Buscar"
          backColor="#424242"
          size={22}
          width={130}
          height={60}
          onPress={show}
        />
      </SearchButton>

      <LineContainer>
        <Line></Line>
      </LineContainer>

      <HairdList>
        {/* <FlatList
          data={clientInfo.hairdressers}
          keyExtractor={hairdId => hairdId._id!}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>(
            <HairdCard
              hairdName={item.hairdName!}
              workingTimeOpen={item.workingTime.open}
              workingTimeClose={item.workingTime.close}
              hairPrice={item.prices.hairPrice}
              beardPrice={item.prices.beardPrice}
              // status={item.status}
            />
          )}
        /> */}

        {/* <HairdCard
          status={'PENDING'}
        />
        <HairdCard
          status={'CONFIRMED'}
        />
        <HairdCard
        />
        <HairdCard
        /> */}
      </HairdList>
    </ImageBackground>
  );
}

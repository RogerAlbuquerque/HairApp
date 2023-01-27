import { ImageBackground } from 'react-native';
import Button from '../../components/Button';
import HairdCard from '../../components/HairdCard';
import HeaderComponent from '../../components/HeaderComponent';
import {Header, ButtonsForTypeClients, LineContainer, Line, ClientList} from './style';

export default function ClientListForHairdresser(){
  return(
    <ImageBackground source={require('../../assets/imgs/backHome.png')}
    style={{flex: 1, paddingHorizontal:20}} resizeMode="cover">

      <Header>
        <HeaderComponent />
      </Header>

      <ButtonsForTypeClients style={{justifyContent:'space-between'}}>
          <Button
            name='Clients pendentes'
            backColor="#F6C33E"
            size={12}
            width={160}
            height={40}
          />

          <Button
          name='Clientes confirmados'
          backColor="#3FC500"
          size={12}
          width={160}
          height={40}
        />
        </ButtonsForTypeClients>

      <LineContainer>
        <Line></Line>
      </LineContainer>

      <ClientList>
        <HairdCard status='CONFIRMED'/>
        <HairdCard/>
        <HairdCard/>
        <HairdCard status='PENDING' />
        <HairdCard/>
        <HairdCard/>
      </ClientList>
    </ImageBackground>
  );
}

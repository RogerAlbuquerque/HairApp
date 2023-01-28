import { ImageBackground } from "react-native";
import Button from "../../components/Button";
import HairdCard from "../../components/HairdCard";
import HeaderComponent from '../../components/HeaderComponent'
import InputText from "../../components/InputText";
import { Header, SearcHairdInput, SearchButton, HairdList,LineContainer, Line } from "./styles";

export default function Home(){
  return(
    <ImageBackground source={require('../../assets/imgs/backHome.png')}
    style={{flex: 1, paddingHorizontal:20}} resizeMode="cover">
      <Header>
        <HeaderComponent />
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
        />
      </SearchButton>

      <LineContainer>
        <Line></Line>
      </LineContainer>

      <HairdList>
        <HairdCard
        />
        <HairdCard
          status={'PENDING'}
        />
        <HairdCard
          status={'CONFIRMED'}
        />
        <HairdCard
        />
        <HairdCard
        />
      </HairdList>
    </ImageBackground>
  );
}

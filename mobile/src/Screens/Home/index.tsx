import { ImageBackground } from "react-native";
import HeaderComponent from '../../components/Header'
import { Header, SearcHairdInput, SearchButton, HairdList } from "./styles";

export default function Home(){
  return(
    <ImageBackground source={require('../../assets/imgs/backHome.png')}
    style={{flex: 1}} resizeMode="cover">
      <Header>
        <HeaderComponent />
      </Header>
      <SearcHairdInput>

      </SearcHairdInput>

      <SearchButton>

      </SearchButton>

      <HairdList>

      </HairdList>
      </ImageBackground>
  );
}

import { ImageBackground } from "react-native";
import HeaderComponent from "../../components/HeaderComponent";
import { Header, HairdInfo, ProfileImage, HairdData, DaysWeek, ButtonToSched, Schedules } from "./style";


export default function SchedClient(){
  return(
    <ImageBackground source={require('../../assets/imgs/backHome.png')}
    style={{flex: 1, paddingHorizontal:20}} resizeMode="cover">
      <Header>
        <HeaderComponent />
      </Header>

      <HairdInfo>
        <ProfileImage>

        </ProfileImage>
        <HairdData>

        </HairdData>
      </HairdInfo>

      <DaysWeek>

      </DaysWeek>

      <Schedules>

      </Schedules>

      <ButtonToSched>

      </ButtonToSched>
    </ImageBackground>
  );

}

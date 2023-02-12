import { createContext, useState } from 'react';
import { TypeClientInfo } from '../types/activeTypes/TypeClientInfo';
import { TypeHairdInfo } from '../types/activeTypes/TypeHairdInfo';
import { TypeSchedList } from '../types/activeTypes/TypeSchedList';
import AlertModal from '../components/UtilsComponents/AlertModal';
import { api } from '../utils/api';
import { EmptyTypeClientInfo } from '../types/emptyTypes/EmptyTypeClientInfo';
import { EmptyTypeHairdInfo } from '../types/emptyTypes/EmptyTypeHairdInfo';

interface userDataTypeContext{
  clientInfo:TypeClientInfo;
  handleClientInfoState:(userData:TypeClientInfo)=>void;
  hairdInfo:TypeHairdInfo;
  handleHairdInfoState:(userData:TypeHairdInfo)=>void;
  handleAlertModal:(title:string, bodyText:string, typeModal:'error' | 'success')=>void;
  titleTextAlertModal:string;
  bodyTextAlertModal:string;
  typeAlertModal:'error' | 'success' | '';
  tokenIsValid:boolean
  mySchedList:TypeSchedList[]
  handleMySchedList:(schedData:TypeSchedList[])=>void;
  logout:()=>void;
  activeToken:()=>void;
}


export const UserInfoContext = createContext({} as userDataTypeContext);


export default function UserDataContext({children}:any){
  //STATES AND FUNCTION TO HANDLE LOGIN
  const [clientInfo,setClientInfoState]=useState<TypeClientInfo>({} as TypeClientInfo);
  const [hairdInfo,setHairdInfoState]=useState<TypeHairdInfo>({} as TypeHairdInfo);
  const [mySchedList, setMySchedList] = useState([{} as TypeSchedList]);
  const [tokenIsValid, setToken] = useState(false)

  function handleClientInfoState(userData:TypeClientInfo){
    setClientInfoState(userData)
  }
  function handleMySchedList(schedData:TypeSchedList[]){
    setMySchedList(schedData)
  }

  function handleHairdInfoState(userData:TypeHairdInfo){
    setHairdInfoState(userData)
  }
  function activeToken(){
    setToken(true)
  }
  function logout(){
    delete api.defaults.headers.common['Authorization']
    setClientInfoState({} as EmptyTypeClientInfo)
    setHairdInfoState({} as EmptyTypeHairdInfo)
    setToken(false)
  }

  //STATES FOR MODAL
  const [isModalAlertVisible,setIsModalAlertVisible]=useState(false);
  const [titleTextAlertModal,setTitleTextAlertModal]=useState('');
  const [bodyTextAlertModal,setBodyTextAlertModal]=useState('');
  const [typeAlertModal,setTypeAlertModal]=useState<'error' | 'success' | ''>('');

  function handleAlertModal(title:string, bodyText:string, typeModal:'error' | 'success'){
    setIsModalAlertVisible(!isModalAlertVisible)
    setTypeAlertModal(typeModal);
    setTitleTextAlertModal(title);
    setBodyTextAlertModal(bodyText);
  }

  return(
    <UserInfoContext.Provider value={{
      clientInfo,
      hairdInfo,
      titleTextAlertModal,
      bodyTextAlertModal,
      typeAlertModal,
      mySchedList,
      handleMySchedList,
      handleClientInfoState,
      handleHairdInfoState,
      handleAlertModal,
      logout,
      activeToken,
      tokenIsValid

      }}>
        <AlertModal
          isModalVisible={isModalAlertVisible}
          setModalValue={() => setIsModalAlertVisible(!isModalAlertVisible)}
          title={titleTextAlertModal}
          bodyText={bodyTextAlertModal}
          typeModal={typeAlertModal}
        />
        {children}
    </UserInfoContext.Provider>

  );
}

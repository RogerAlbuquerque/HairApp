import { createContext, useState } from 'react';
import { TypeClientInfo } from '../types/TypeClientInfo';
import { TypeHairdInfo } from '../types/TypeHairdInfo';
import AlertModal from '../components/UtilsComponents/AlertModal';

interface userDataTypeContext{
  clientInfo:TypeClientInfo;
  handleClientInfoState:(userData:TypeClientInfo)=>void;
  hairdInfo:TypeHairdInfo;
  handleHairdInfoState:(userData:TypeHairdInfo)=>void;
  handleAlertModal:(title:string, bodyText:string, typeModal:'error' | 'success')=>void;
  titleTextAlertModal:string;
  bodyTextAlertModal:string;
  typeAlertModal:'error' | 'success' | '';
}


export const UserInfoContext = createContext({} as userDataTypeContext);


export default function UserDataContext({children}:any){
  //STATES AND FUNCTION TO HANDLE LOGIN
  const [clientInfo,setClientInfoState]=useState<TypeClientInfo>({} as TypeClientInfo);
  const [hairdInfo,setHairdInfoState]=useState<TypeHairdInfo>({} as TypeHairdInfo);

  function handleClientInfoState(userData:TypeClientInfo){
    setClientInfoState(userData)
  }

  function handleHairdInfoState(userData:TypeHairdInfo){
    setHairdInfoState(userData)
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
      handleClientInfoState,
      handleHairdInfoState,
      handleAlertModal

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

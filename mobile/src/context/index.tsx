import { createContext, useState } from 'react';
import { TypeClientInfo } from '../types/TypeClientInfo';
import { TypeHairdInfo } from '../types/TypeHairdInfo';

interface userDataTypeContext{
  clientInfo:TypeClientInfo;
  handleClientInfoState:(userData:TypeClientInfo)=>void;
  hairdInfo:TypeHairdInfo;
  handleHairdInfoState:(userData:TypeHairdInfo)=>void;
  handleAlertModal:(title:string, bodyText:string, typeModal:'error' | 'success')=>void;
  titleTextModal:string;
  bodyTextModal:string;
  typeModal:'error' | 'success' | '';
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
  const [titleTextModal,setTitleTextModal]=useState('');
  const [bodyTextModal,setBodyTextModal]=useState('');
  const [typeModal,setTypeModal]=useState<'error' | 'success' | ''>('');

  function handleAlertModal(title:string, bodyText:string, typeModal:'error' | 'success'){
    setTypeModal(typeModal);
    setTitleTextModal(title);
    setBodyTextModal(bodyText);
  }






  return(
    <UserInfoContext.Provider value={{
      clientInfo,
      handleClientInfoState,
      hairdInfo,
      handleHairdInfoState,
      titleTextModal,
      bodyTextModal,
      typeModal,
      handleAlertModal

      }}>
        {children}
    </UserInfoContext.Provider>

  );
}

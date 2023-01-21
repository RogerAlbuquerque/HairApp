import {Router} from 'express';
import { authentication } from './app/useCases/auth/authentication';


import { login } from './app/useCases/auth/login';
import { searchHairdresser } from './app/useCases/hairdressers/searchHairdresser';
import { verifyEmailToRecoverPassword } from './app/useCases/auth/verifyEmailToRecoverPassword';
import { passwordRecovery } from './app/useCases/auth/passwordRecovery';
import { createClient } from './app/useCases/clients/createClient';
import { createHairdresser } from './app/useCases/hairdressers/createHairdresser';

// import { deleteClient } from './app/useCases/clients/deleteClient';
// import { searchClient } from './app/useCases/clients/searchClient';
import { showClient } from './app/useCases/inutils/Clients/showClients';
import { updateHairdresserInfo } from './app/useCases/hairdressers/updateHairdresserInfo';
import { showAllHairdresser } from './app/useCases/inutils/Hairdressers/showAllHairdresser';
// import { showAllHairdresser } from './app/useCases/inutils/Hairdressers/showAllHairdresser';
// import { deleteHairdresser } from './app/useCases/inutils/Hairdressers/deleteHairdresser';






export const router = Router();

// ROTAS

//CLIENT
router.get('/client', showClient);
router.post('/client', createClient);
router.post('/login', login);

// router.get('/hairdresser/:info', searchClient);
// router.delete('/client/:id', deleteClient);


//HAIDRESSER
router.post('/hairdresser', createHairdresser);
router.patch('/hairdresser/:user', updateHairdresserInfo);
router.get('/hairdresser/:hairdresser', searchHairdresser);
// router.delete('/hairdresser/:id', deleteHairdresser);
router.get('/hairdresser', showAllHairdresser);


//AUTHENTICATION
router.post('/auth', authentication);

//PASSWORD RECOVERY
router.post('/verifyEmail', verifyEmailToRecoverPassword);

router.post('/passwordRecovery/:token/:email', passwordRecovery);






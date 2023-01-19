import {Router} from 'express';
import { authentication } from './app/useCases/auth/authentication';

import { createClient } from './app/useCases/clients/createClient';
import { deleteClient } from './app/useCases/clients/deleteClient';
import { searchClient } from './app/useCases/clients/searchClient';
import { showClient } from './app/useCases/clients/showClients';
import { createHairdresser } from './app/useCases/hairdressers/createHairdresser';
import { deleteHairdresser } from './app/useCases/hairdressers/deleteHairdresser';
import { searchHairdresser } from './app/useCases/hairdressers/searchHairdresser';
import { showAllHairdresser } from './app/useCases/hairdressers/showAllHairdresser';
import { verifyEmailToRecoverPassword } from './app/useCases/auth/verifyEmailToRecoverPassword';
import { passwordRecovery } from './app/useCases/auth/passwordRecovery';





export const router = Router();

// ROTAS

//CLIENT
router.get('/client', showClient);

router.get('/hairdresser/:info', searchClient);

router.post('/client', createClient);

router.delete('/client/:id', deleteClient);


//HAIDRESSER
router.post('/hairdresser', createHairdresser);

router.get('/hairdresser', showAllHairdresser);

router.get('/hairdresser/:info', searchHairdresser);

router.delete('/hairdresser/:id', deleteHairdresser);

//AUTHENTICATION
router.post('/auth', authentication);

//PASSWORD RECOVERY
router.post('/verifyEmail', verifyEmailToRecoverPassword);

router.post('/passwordRecovery/:token/:email', passwordRecovery);






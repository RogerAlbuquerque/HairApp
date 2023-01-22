import {Router} from 'express';
import { authentication } from './app/useCases/auth/authentication';

//AUTH
import { login } from './app/useCases/auth/login';
import { verifyEmailToRecoverPassword } from './app/useCases/auth/verifyEmailToRecoverPassword';
import { passwordRecovery } from './app/useCases/auth/passwordRecovery';



//CLIENT
import { createClient } from './app/useCases/clients/createClient';
import { showClient } from './app/useCases/inutils/Clients/showClients';

//HAIRDRESSER
import { searchHairdresser } from './app/useCases/hairdressers/searchHairdresser';
import { createHairdresser } from './app/useCases/hairdressers/createHairdresser';

// import { deleteClient } from './app/useCases/clients/deleteClient';

import { updateHairdresserInfo } from './app/useCases/hairdressers/updateHairdresserInfo';
import { showAllHairdresser } from './app/useCases/hairdressers/showAllHairdresser';
import { scheduling } from './app/useCases/SchedClients/Scheduling';
import { updateScheduling } from './app/useCases/SchedClients/updateScheduling';
// import { deleteHairdresser } from './app/useCases/inutils/Hairdressers/deleteHairdresser';






export const router = Router();

// ROTAS

//CLIENT
router.get('/client', showClient);
router.post('/client', createClient);


// router.get('/hairdresser/:info', searchClient);
// router.delete('/client/:id', deleteClient);





//HAIDRESSER
router.post('/hairdresser', createHairdresser);
router.put('/hairdresser/:user', updateHairdresserInfo);
router.get('/hairdresser', searchHairdresser);
router.get('/allHairdresser', showAllHairdresser);
// router.delete('/hairdresser/:id', deleteHairdresser);


//SCHEDULE CLIENTS

router.post('/scheduling', scheduling);
router.put('/scheduling/update', updateScheduling);

//AUTHENTICATION
router.post('/auth', authentication);
router.post('/login', login);

//PASSWORD RECOVERY
router.post('/verifyEmail', verifyEmailToRecoverPassword);
router.post('/passwordRecovery/:token/:email', passwordRecovery);






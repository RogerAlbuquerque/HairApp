import {Router} from 'express';


import {showMe} from './app/useCases/showMe';

//AUTH
import { login } from './app/useCases/auth/login';
import { verifyEmailToRecoverPassword } from './app/useCases/auth/verifyEmailToRecoverPassword';
import { passwordRecovery } from './app/useCases/auth/passwordRecovery';
import { authentication } from './app/useCases/auth/authentication';

//CLIENT
import { createClient } from './app/useCases/clients/createClient';
import { showClient } from './app/useCases/inutils/Clients/showClients';
import { updateClientInfo } from './app/useCases/clients/updateClientInfo';
import { myHairdList } from './app/useCases/clients/myHairdListAdd';

//HAIRDRESSER
import { createHairdresser } from './app/useCases/hairdressers/createHairdresser';
import { updateHairdresserInfo } from './app/useCases/hairdressers/updateHairdresserInfo';
import { showAllHairdresser } from './app/useCases/hairdressers/showAllHairdresser';

//SCHEDULING
import { scheduling } from './app/useCases/SchedClients/Scheduling';
import { updateScheduling } from './app/useCases/SchedClients/updateScheduling';
import { showMyScheduleClients } from './app/useCases/SchedClients/showMyScheduleClients';
import { deleteScheduleClient } from './app/useCases/SchedClients/deleteScheduleClient';

export const router = Router();


// ROTAS
router.get('/me/:id', showMe);

//CLIENT
router.get('/client', showClient);

router.post('/client/create', createClient);

router.put('/client/:clientName/update', updateClientInfo);
router.put('/client/:clientId/addHairdresser', myHairdList);

//HAIDRESSER
router.post('/hairdresser/create', createHairdresser);

router.put('/hairdresser/:user', updateHairdresserInfo);
router.get('/hairdresser/all', showAllHairdresser);

//SCHEDULE CLIENTS
router.post('/scheduling', scheduling);
router.get('/scheduling/:hairdId/myClients', showMyScheduleClients);
router.put('/scheduling/update', updateScheduling);
router.delete('/scheduling/:haird/:schedId/delete', deleteScheduleClient);

//AUTHENTICATION
router.post('/auth', authentication);
router.post('/login', login);

//PASSWORD RECOVERY
router.post('/verifyEmail', verifyEmailToRecoverPassword);
router.put('/passwordRecovery/:token/:email', passwordRecovery);






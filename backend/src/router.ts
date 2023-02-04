import {Router} from 'express';


import {showMe} from './app/useCases/showMe';

//AUTH
import { login } from './app/useCases/auth/login';
import { verifyEmailToRecoverPassword } from './app/useCases/auth/verifyEmailToRecoverPassword';
import { passwordRecovery } from './app/useCases/auth/passwordRecovery';

//CLIENT
import { createClient } from './app/useCases/clients/createClient';
// import { showClient } from './app/useCases/inutils/Clients/showClients';
import { updateClientInfo } from './app/useCases/clients/updateClientInfo';
import { myHairdList } from './app/useCases/clients/myHairdListAdd';

//HAIRDRESSER
import { createHairdresser } from './app/useCases/hairdressers/createHairdresser';
import { updateHairdresserInfo } from './app/useCases/hairdressers/updateHairdresserInfo';
// import { showAllHairdresser } from './app/useCases/hairdressers/showAllHairdresser';

//SCHEDULING
import { scheduling } from './app/useCases/SchedClients/Scheduling';
import { updateScheduling } from './app/useCases/SchedClients/updateScheduling';
import { showMySchedClients } from './app/useCases/SchedClients/showMySchedClients';
import { deleteScheduleClient } from './app/useCases/SchedClients/deleteScheduleClient';
import verifyTokenJWT from './utils/verifyTokenJWT';

export const router = Router();


// ROTAS
router.get('/me/:id',verifyTokenJWT, showMe);

//CLIENT
// router.get('/client', showClient);

router.post('/client/create', createClient);

router.put('/client/:clientName/update',verifyTokenJWT, updateClientInfo);
router.put('/client/:clientId/addHairdresser',verifyTokenJWT, myHairdList);

//HAIDRESSER
router.post('/hairdresser/create', createHairdresser);

router.put('/hairdresser/:user',verifyTokenJWT, updateHairdresserInfo);

router.get('/scheduling/:hairdId/myClients',verifyTokenJWT, showMySchedClients);
router.delete('/scheduling/:haird/:schedId/delete',verifyTokenJWT, deleteScheduleClient);
// router.get('/hairdresser/all', showAllHairdresser);

//SCHEDULE CLIENTS
router.post('/scheduling',verifyTokenJWT, scheduling);
router.put('/scheduling/update',verifyTokenJWT, updateScheduling);


//AUTHENTICATION
router.post('/login', login);

//PASSWORD RECOVERY
router.post('/verifyEmail', verifyEmailToRecoverPassword);
router.put('/passwordRecovery/:token/:email', passwordRecovery);






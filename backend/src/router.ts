import {Router} from 'express';

import { createClient } from './app/useCases/clients/createClient';
import { deleteClient } from './app/useCases/clients/deleteClient';
import { showClient } from './app/useCases/clients/showClients';
import { createHairdresser } from './app/useCases/hairdressers/createHairdresser';
import { deleteHairdresser } from './app/useCases/hairdressers/deleteHairdresser';
import { searchHairdresser } from './app/useCases/hairdressers/searchHairdresser';
import { showHairdresser } from './app/useCases/hairdressers/showHairdresser';





export const router = Router();

// ROTAS
router.get('/client', showClient);

router.post('/client', createClient);

router.delete('/client/:id', deleteClient);

router.post('/hairdresser', createHairdresser);

router.get('/hairdresser', showHairdresser);

router.get('/hairdresser/:info', searchHairdresser);

router.delete('/hairdresser/:id', deleteHairdresser);



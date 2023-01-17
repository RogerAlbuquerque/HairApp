import {Router} from 'express';

import { createClient } from './app/useCases/clients/createClient';



export const router = Router();

// ROTAS
router.post('/createUser', createClient);

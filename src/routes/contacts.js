import { Router } from 'express';
import { getAll, getById } from '../controllers/contacts.js';

const router = Router();

router.get('/', getAll);
router.get('/:contactId', getById);

export default router;

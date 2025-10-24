import express from 'express';
import {
  createContact,
  getContactById,
  getContactsController,
  updateContact,
  deleteContact,
  patchContact,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { createContactSchema } from '../validation/contact.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
const router = express.Router();

router.get('/', ctrlWrapper(getContactsController));         // Tüm kişileri listele
router.post('/', validateBody(createContactSchema), ctrlWrapper(createContact));         // Yeni kişi ekle
router.get('/:id', isValidId, ctrlWrapper(getContactById));      // ID ile kişi getir
router.put('/:id', isValidId, validateBody(createContactSchema), ctrlWrapper(updateContact));       // ID ile kişi güncelle
router.delete('/:id', isValidId, ctrlWrapper(deleteContact));    // ID ile kişi sil
router.patch('/:id', isValidId, validateBody(createContactSchema), ctrlWrapper(patchContact))

export default router;

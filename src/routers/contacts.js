import express from 'express';
import {
  getAllContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
  patchContact,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

router.get('/', ctrlWrapper(getAllContacts));         // Tüm kişileri listele
router.post('/', ctrlWrapper(createContact));         // Yeni kişi ekle
router.get('/:id', ctrlWrapper(getContactById));      // ID ile kişi getir
router.put('/:id', ctrlWrapper(updateContact));       // ID ile kişi güncelle
router.delete('/:id', ctrlWrapper(deleteContact));    // ID ile kişi sil
router.patch('/:id', ctrlWrapper(patchContact))

export default router;

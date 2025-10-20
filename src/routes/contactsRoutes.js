import express from 'express';
import {
  getAllContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
} from '../controllers/contactsController.js';

const router = express.Router();

router.get('/', getAllContacts);         // Tüm kişileri listele
router.post('/', createContact);         // Yeni kişi ekle
router.get('/:id', getContactById);      // ID ile kişi getir
router.put('/:id', updateContact);       // ID ile kişi güncelle
router.delete('/:id', deleteContact);    // ID ile kişi sil

export default router;

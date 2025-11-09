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
import { createContactSchema, contactUpdateShema } from '../validation/contact.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
import { ROLES } from '../constants/index.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { upload } from '../middlewares/multer.js';

const router = express.Router();
router.use(authenticate);
router.get('/', checkRoles(ROLES.ADMIN), ctrlWrapper(getContactsController));         // Tüm kişileri listele
router.post('/', checkRoles(ROLES.ADMIN, ROLES.USER), upload.single('photo'), validateBody(createContactSchema), ctrlWrapper(createContact));         // Yeni kişi ekle
router.get('/:id', checkRoles(ROLES.ADMIN, ROLES.USER), isValidId, ctrlWrapper(getContactById));      // ID ile kişi getir
router.put('/:id', checkRoles(ROLES.ADMIN),upload.single('photo'), isValidId, validateBody(createContactSchema), ctrlWrapper(updateContact));       // ID ile kişi güncelle
router.delete('/:id', checkRoles(ROLES.ADMIN, ROLES.USER), isValidId, ctrlWrapper(deleteContact));    // ID ile kişi sil
router.patch('/:id',  (req, res, next) => {
    console.log('Middleware çalıştı');
    next();
  }, upload.single('photo'),
  (req, res, next) => {
    console.log('req.file:', req.file);       // Dosya bilgisi
    console.log('req.body:', req.body);       // Diğer form alanları
    next();
  }, checkRoles(ROLES.ADMIN, ROLES.USER), (req, res, next) => {
    console.log('checkroles');
    next();
  },  validateBody(contactUpdateShema), (req, res, next) => {
    console.log('şema çalıştı');
    next();
  }, ctrlWrapper(patchContact));

export default router;



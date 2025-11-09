import createHttpError from 'http-errors';
import { Contact } from '../models/contactModel.js';
import { ROLES } from '../constants/index.js';

export const checkRoles = (...roles) => async (req, res, next) => {
  const { user } = req;

  if (!user) return next(createHttpError(401));

  if (roles.includes(user.role)) {
    // Admin yetkisi varsa direkt geçsin
    if (user.role === ROLES.ADMIN) return next();

    // Eğer kullanıcıysa, contact’a sahip mi kontrol et
    if (user.role === ROLES.USER) {
      const { contactId } = req.params;
      if (!contactId) return next(createHttpError(403));

      const contact = await Contact.findOne({
        _id: contactId,
        owner: user._id,
      });

      if (contact) return next();
    }
  }

  return next(createHttpError(403));
};
import { Contact } from '../models/contactModel.js';
import mongoose from 'mongoose';
import createHttpError from 'http-errors';

// Tüm kişileri getir
export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

// Yeni kişi ekle
export const createContact = async (req, res, next) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json({
      message: 'Successfully created a contact!',
      data: savedContact,
    });
  } catch (error) {
    next(error);
  }
};

// ID’ye göre kişi getir
export const getContactById = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'Contact not found' });
  }

  const contact = await Contact.findById(id);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }
  res.status(200).json(contact);
};

// ID’ye göre kişi güncelle
export const updateContact = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(updatedContact);
  } catch (error) {
    next(error);
  }
};

// ID’ye göre kişi sil
export const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted' });
  } catch (error) {
    next(error);
  }
};


export const patchContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw createHttpError(404, 'Contact not found');
    }
    const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedContact) {
      throw createHttpError(404, 'Contact not found');
    }

    res.status(200).json({
      status: 200,
      message: 'Successfully patched a contact!',
      data: updatedContact,
    });
  } catch (error) {
    next(error);
  }
};

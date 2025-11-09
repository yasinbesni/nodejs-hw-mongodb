import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string', 
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string().required(),
  email: Joi.string().email().allow(null),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal')
    .required(),
  userId: Joi.string().required(),
});

export const contactUpdateShema = Joi.object({
  name: Joi.string().min(3).max(20).optional().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least 3 characters long',
    'string.max': 'Name must not exceed 20 characters',
  }),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .optional()
    .messages({
      'string.pattern.base': 'Phone number must be exactly 10 digits',
    }),
  email: Joi.string().email().optional().messages({
    'string.email': 'Email must be a valid email address',
  }),
  isFavourite: Joi.boolean().optional(),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .optional(),
});
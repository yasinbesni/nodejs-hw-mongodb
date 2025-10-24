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
});

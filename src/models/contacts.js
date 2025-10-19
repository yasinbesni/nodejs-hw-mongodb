import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String },
    isFavourite: { type: Boolean, default: false },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: true,
      default: 'personal'
    }
  },
  { timestamps: true }
);

const Contact = mongoose.model('Contact', contactSchema, 'contacts');
// üçüncü argüman koleksiyon adını belirler; contacts.json içeriği ile eşleşmeli.

export default Contact;

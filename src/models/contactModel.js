import { Schema, mongoose } from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, default: null },
    isFavourite: { type: Boolean, default: false },
    contactType: {
      required: true,
      type: String,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
    },
    owner: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    photo: { type: String },
  },
  { timestamps: true, versionKey: false },
);

export const Contact = mongoose.model('Contact', contactSchema);

import mongoose from 'mongoose';

export const initMongoConnection = async () => {
  try {
    const { MONGODB_URI } = process.env;

    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    await mongoose.connect(MONGODB_URI);
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('Mongo connection failed:', error.message);
    process.exit(1);
  }
};
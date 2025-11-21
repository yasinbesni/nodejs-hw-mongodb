import mongoose from 'mongoose';

export const initMongoConnection = async () => {
  try {
    const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } = process.env;


 const MONGODB_URI=`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URL is not defined in environment variables');
    }

    await mongoose.connect(MONGODB_URI);
    console.log('✅ Mongo connection successfully established!');
  } catch (error) {
    console.error('❌ Mongo connection failed:', error.message);
    process.exit(1);
  }
};

import mongoose from 'mongoose';

export async function initMongoConnection() {
  const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_URL,
    MONGODB_DB
  } = process.env;

  if (!MONGODB_USER || !MONGODB_PASSWORD || !MONGODB_URL || !MONGODB_DB) {
    throw new Error('MongoDB environment variables are not set');
  }

  const uri = `mongodb+srv://${encodeURIComponent(
    MONGODB_USER
  )}:${encodeURIComponent(MONGODB_PASSWORD)}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`;

  mongoose.set('strictQuery', true);
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log('Mongo connection successfully established!');
}

import dotenv from 'dotenv';
dotenv.config();

console.log('MONGODB_URL:', process.env.MONGODB_URL);

import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

const bootstrap = async () => {
  await initMongoConnection(); // önce MongoDB bağlantısı
  setupServer();               // sonra Express sunucusunu başlat
};

bootstrap();

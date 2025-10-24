import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import contactsRoutes from './routers/contacts.js'; // buraya route'u import et
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

export const setupServer = () => {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(cors());
  app.use(pino());

  app.use(express.json()); // JSON body parse için mutlaka ekle

  // Rotalar buraya eklenecek
  app.use('/contacts', contactsRoutes);

  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


};

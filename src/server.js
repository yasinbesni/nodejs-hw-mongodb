import express from 'express';
import cors from 'cors';
import pino from 'pino';
import pinoHttp from 'pino-http';
import contactsRouter from './routes/contacts.js';

export function setupServer() {
  const app = express();

  // middleware
  app.use(cors());
  app.use(express.json());

  // logger (pino)
  const logger = pino();
  app.use(pinoHttp({ logger }));

  // routes
  app.use('/contacts', contactsRouter);

  // 404 handler for non-existing routes
  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  return app;
}

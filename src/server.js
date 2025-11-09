import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import router from './routers/index.js';
import cookieParser from 'cookie-parser';
import { UPLOAD_DIR } from './constants/index.js';

export const setupServer = () => {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(cors());
  app.use(pino());

  app.use(express.json());
  app.use(cookieParser());
  app.use(router);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  app.use('/uploads', express.static(UPLOAD_DIR));
};

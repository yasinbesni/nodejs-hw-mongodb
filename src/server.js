import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import contactsRoutes from './routes/contactsRoutes.js'; // buraya route'u import et

export const setupServer = () => {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(cors());
  app.use(pino());

  app.use(express.json()); // JSON body parse için mutlaka ekle

  // Rotalar buraya eklenecek
  app.use('/contacts', contactsRoutes);

  // 404 için fallback
 app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


};
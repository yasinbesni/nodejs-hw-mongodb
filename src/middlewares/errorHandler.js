import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
   console.error('💥 Hata mesajı:', err.message);
  console.error('📍 Stack izleme:', err.stack);

  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }

  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};
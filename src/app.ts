import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import router from './app/router';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();


//parser
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: ["http://localhost:5173" ,"http://localhost:5174","http://localhost:3000",
  "https://bicycle-store-frontend-project.vercel.app"], credentials: true }));


app.use('/api/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Food store!');
});
app.use(globalErrorHandler);
app.use(notFound);

export default app;

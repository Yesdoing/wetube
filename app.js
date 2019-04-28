import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from "express";
import globalRouter from './routers/globalRouter';
import helmet from 'helmet';
import morgan from 'morgan';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import routes from './routes' 
import { localsMiddleware } from './middlewares';

const app = express();

app.set('view engine', 'pug');

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


export default app;
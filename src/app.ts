import express from 'express';
import helmet from 'helmet';
import router from './routes/router';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(router);

export default app;
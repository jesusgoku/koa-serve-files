import Koa from 'koa';
import cors from '@koa/cors';

import * as middleware from './middleware';
import routes from './routes';

const app = new Koa();

app.use(cors());

app.use(middleware.handleErrors);

app.use(routes.routes());
app.use(routes.allowedMethods());

export default app;

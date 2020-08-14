import Router from '@koa/router';

import * as handlers from './handlers';

const routes = new Router();

routes.get('/', handlers.home);

export default routes;

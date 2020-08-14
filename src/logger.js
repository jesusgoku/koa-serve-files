import log4js from 'log4js';

import { DEBUG_LEVEL } from './config';

const logger = log4js.getLogger('SERVE_FILES');

logger.level = DEBUG_LEVEL;

export default logger;

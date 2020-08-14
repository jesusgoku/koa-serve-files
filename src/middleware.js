import logger from './logger';

async function handleErrors(ctx, next) {
  try {
    await next();
  } catch ({ status, message }) {
    logger.error(message);

    ctx.status = status || 500;
    ctx.body = { message };
  }
}

export {
  // eslint-disable-next-line import/prefer-default-export
  handleErrors,
};

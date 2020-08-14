import { promisify } from 'util';
import { basename, join } from 'path';
import { createReadStream, access } from 'fs';
import mimeTypes from 'mime-types';

const accessAsync = promisify(access);

async function home(ctx) {
  const { file } = ctx.query;

  const sanitizedFile = basename(file);
  const filePath = join(__dirname, '../public', sanitizedFile);

  try {
    await accessAsync(filePath);
  } catch (err) {
    ctx.throw(404, 'File not found');
  }

  const fileStream = createReadStream(filePath);
  const mimeType = mimeTypes.lookup(sanitizedFile) || 'application/octet-stream';

  ctx.set('Content-Type', mimeType);
  ctx.set('Content-Disposition', `filename="${sanitizedFile}"`);

  ctx.body = fileStream;
}

export {
  // eslint-disable-next-line import/prefer-default-export
  home,
};

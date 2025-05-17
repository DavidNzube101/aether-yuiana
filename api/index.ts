import { createServer, proxy } from 'vercel-node-server';
import { createApp } from '../src/main';

const server = createServer(async (req, res) => {
  const app = await createApp();
  const instance = app.getHttpAdapter().getInstance();
  return instance(req, res);
});

export default async function handler(req, res) {
  await proxy(server, req, res);
}

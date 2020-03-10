import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ ok: 'tudo certo' });
});

export default routes;

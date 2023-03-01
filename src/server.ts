import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { json } from 'body-parser';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

import logger from './backend/logging';
import serverLogic from './serverLogic'

express()
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		json(),
	)
	.use('/api/v1', serverLogic)
	.use(sapper.middleware())
	.listen(PORT, () => {
		logger.info({ PORT }, "Server is running")
	});

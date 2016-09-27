import 'babel-polyfill';
import koa from 'koa';
import parser from 'koa-bodyparser';
import logger from 'koa-logger';
import cors from 'koa-cors';
import { Router } from './router';

//TODO: Make the config dynamic to suit the environment
const config = require('../config/dev.json');

class KoaServer {
  constructor(config) {
    this.app, this.router = {};
    this.config = config;
    this.initialize();
  }

  initialize() {
    this.app = new koa();
    this.router = new Router();
    this.setupMiddleware();
  }

  setupMiddleware() {
    this.app.use(cors(this.config.corsOptions));
    this.app.use(parser());
    this.app.use(logger());
    this.app.use(this.router.koaRouter.routes());     
    this.app.use(this.router.koaRouter.allowedMethods());       
  }

  startServer() {
    this.app.listen(this.config.port);
    console.log(`Koa server listening on port ${this.config.port}`);
  }
}

//Run server
const server = new KoaServer(config);
server.startServer();

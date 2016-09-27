import KoaRouter from 'koa-router';
import { Routes } from './routes';

export class Router {
  constructor() {
    this.router, this.routes = {};
    this.initializeRouter();
  }

  get koaRouter() {
    return this.router;
  }

  initializeRouter() {
    this.router = KoaRouter();
    this.routes = new Routes();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get('/', this.routes.index);
    this.router.post('/login', this.routes.login);      
  }
}
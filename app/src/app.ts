import routerCommits from "./commits/interfaces/http/commits.route";
import ServerBootstrap from "./bootstrap/server.bootstrap";
import APIBootstrap from "./bootstrap/api.bootstrap";
import express from "express";
import cors from "cors";

const serverBootstrap = new ServerBootstrap();
const apiBootstrap = new APIBootstrap();

class App {
  constructor() {
    this.startServer();
    this.apiHealthStatus();
    this.mountRoutes();
  }
  startServer(): void {
    serverBootstrap.initialize();
  }
  apiHealthStatus(): void {
    apiBootstrap.initialize();
  }
  mountRoutes(): void {
    serverBootstrap.expressApp.use(cors());
    serverBootstrap.expressApp.use("/commits", routerCommits);
    serverBootstrap.expressApp.use(express.json());
  }
}

export default new App();

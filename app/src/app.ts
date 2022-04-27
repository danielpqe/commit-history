import express, { Application } from "express";
import routerCommits from "./commits/interfaces/commits.route";

class App {
  expressApp: Application;
  constructor() {
    this.expressApp = express();
    this.listen();
    this.mountRoutes();
  }
  listen(): void {
    this.expressApp.listen(3000, () => console.log("listening"));
  }
  mountRoutes(): void {
    this.expressApp.use("/commits", routerCommits);
  }
}

const application = new App();
const app = application.expressApp;

export default app;

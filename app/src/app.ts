import routerCommits from "./commits/interfaces/http/commits.route";
import ServerBootstrap from "./bootstrap/server.bootstrap";

const serverBootstrap = new ServerBootstrap();
//serverBootstrap.initialize();

class App {
  constructor() {
    this.listen();
    this.mountRoutes();
  }
  listen(): void {
    serverBootstrap.initialize();
  }
  mountRoutes(): void {
    serverBootstrap.expressApp.use("/commits", routerCommits);
  }
}

export default new App();

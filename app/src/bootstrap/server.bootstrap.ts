import IBootstrap from "./bootstrap.interface";
import express, { Application } from "express";

export default class ServerBootstrap implements IBootstrap {
  expressApp: Application;
  constructor() {
    this.expressApp = express();
    //this.initialize();
  }

  initialize(): Promise<boolean | Error> {
    return new Promise((res, rej) => {
      this.expressApp.listen(3000, () =>
        console.log("Server running on http://localhost:3000")
      );
    });
  }
}

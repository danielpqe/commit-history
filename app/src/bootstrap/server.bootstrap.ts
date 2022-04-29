import IBootstrap from "./bootstrap.interface";
import express, { Application } from "express";
import dotenv from "dotenv";

dotenv.config();
const { PORT } = process.env || 8000;

export default class ServerBootstrap implements IBootstrap {
  expressApp: Application;
  constructor() {
    this.expressApp = express();
    //this.initialize();
  }

  initialize(): Promise<boolean | Error> {
    return new Promise((res, rej) => {
      this.expressApp.listen(PORT, () =>
        console.log("Server running on http://localhost:" + PORT)
      );
    });
  }
}

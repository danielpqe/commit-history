import IBootstrap from "./bootstrap.interface";

export default class APIBootstrap implements IBootstrap {
  constructor() {}

  initialize(): Promise<boolean | Error> {
    return new Promise((res, rej) => {
      this.expressApp.listen(3000, () =>
        console.log("Server running on http://localhost:3000")
      );
    });
  }
}

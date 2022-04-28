import IBootstrap from "./bootstrap.interface";
import axios from "axios";
import dotenv from "dotenv";

export default class APIBootstrap {
  constructor() {}

  //initialize(): Promise<boolean | Error> {
  initialize() {
    return axios
      .get("https://api.github.com/")
      .then((data) => {
        console.log("API health status: " + data.statusText);
      })
      .catch((err) => {
        console.log("API health check: " + err);
      });
    //     this.expressApp.listen(3000, () =>
    //       console.log("Server running on http://localhost:3000")
    //     );
    //   });

    // const data = await axios.get("https://api.github.com/");
    // console.log("API health check: " + data.status);
    // if (data.status === 200) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
}

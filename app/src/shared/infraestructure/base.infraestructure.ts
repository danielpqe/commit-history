import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const { BASE_URL, OWNER, REPO } = process.env;

export abstract class BaseInfraestructure<T> {
  insert(commit: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  update(commit: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<T> {
    const URL_findById =
      BASE_URL + "repos/" + OWNER + "/" + REPO + "/commits/" + id;

    const { data } = await axios.get<T>(URL_findById);

    return data;
  }
  async findAll() {
    const URL_findAll = BASE_URL + "repos/" + OWNER + "/" + REPO + "/commits";

    const { data } = await axios.get<T>(URL_findAll);

    return data;
  }
}

import { Request, Response } from "express";
import { CommitApplication } from "../../application/commit.application";

export class CommitsController {
  constructor(private application: CommitApplication) {}
  async list(req: Request, res: Response) {
    const commits = await this.application.findAll();
    res.json(commits);
  }
}

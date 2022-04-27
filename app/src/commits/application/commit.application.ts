import { BaseRepository } from "../../shared/domain/repository/base.repository";
import { CommitModel } from "../domain/models/commit.model";

export class CommitApplication {
  constructor(private repositoryCommit: BaseRepository<CommitModel>) {}

  add(commit: CommitModel) {
    this.repositoryCommit
      .insert(commit)
      .then((user) => console.log(user))
      .catch((error) => console.error(error));
  }

  update(commit: CommitModel) {
    this.repositoryCommit
      .update(commit)
      .then((user) => console.log(user))
      .catch((error) => console.error(error));
  }

  delete(commit: CommitModel) {
    this.repositoryCommit
      .update(commit)
      .then((user) => console.log(user))
      .catch((error) => console.error(error));
  }

  findById(commit: CommitModel) {
    this.repositoryCommit
      .update(commit)
      .then((user) => console.log(user))
      .catch((error) => console.error(error));
  }

  async findAll() {
    return await this.repositoryCommit.findAll();
    // this.repositoryCommit.findAll().then((user) => {
    //   return user;
    // });
  }
}

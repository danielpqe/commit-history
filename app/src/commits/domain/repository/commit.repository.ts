import { CommitModel } from "../models/commit.model";

export interface CommitRepository {
  insert(commit: CommitModel): Promise<CommitModel>;
  update(commit: CommitModel): Promise<CommitModel>;
  delete(id: CommitModel): Promise<CommitModel>;
  findById(id: CommitModel): Promise<CommitModel>;
  findAll(): Promise<CommitModel[]>;
}

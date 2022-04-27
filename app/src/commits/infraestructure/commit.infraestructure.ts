import { BaseRepository } from "../../shared/domain/repository/base.repository";
import { BaseInfraestructure } from "../../shared/infraestructure/base.infraestructure";
import { CommitModel } from "../domain/models/commit.model";

export class CommitInfraestructure
  extends BaseInfraestructure<CommitModel>
  implements BaseRepository<CommitModel> {
  //   insert(commit: CommitModel): Promise<CommitModel> {
  //     throw new Error("Method not implemented.");
  //   }
  //   update(commit: CommitModel): Promise<CommitModel> {
  //     throw new Error("Method not implemented.");
  //   }
  //   delete(id: string): Promise<boolean> {
  //     throw new Error("Method not implemented.");
  //   }
  //   findById(id: string): Promise<CommitModel> {
  //     throw new Error("Method not implemented.");
  //   }
  //   findAll(): Promise<CommitModel[]> {
  //     throw new Error("Method not implemented.");
  //   }
}

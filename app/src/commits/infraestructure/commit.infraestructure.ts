import { BaseRepository } from "../../shared/domain/repository/base.repository";
import { BaseInfraestructure } from "../../shared/infraestructure/base.infraestructure";
import { CommitModel } from "../domain/models/commit.model";

export class CommitInfraestructure
  extends BaseInfraestructure<CommitModel>
  implements BaseRepository<CommitModel> {}

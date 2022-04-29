import express from "express";
import { CommitApplication } from "../../application/commit.application";
import { CommitInfraestructure } from "../../infraestructure/commit.infraestructure";
import { CommitsController } from "./commits.controller";

const infraestructure = new CommitInfraestructure();
const application = new CommitApplication(infraestructure);

const controller = new CommitsController(application);

const router = express.Router();

router.get("/", controller.list.bind(controller));
router.get("/:id", controller.listById.bind(controller));

export default router;

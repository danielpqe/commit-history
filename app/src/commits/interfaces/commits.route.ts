import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const data = {
    id: "asdfsfd",
    description: "description",
  };

  res.json(data);
});

export default router;

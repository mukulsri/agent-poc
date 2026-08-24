const express = require("express");
const taskService = require("../services/taskService");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(taskService.listTasks());
});

router.post("/", (req, res) => {
  try {
    const task = taskService.createTask(req.body || {});
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:id", (req, res) => {
  const task = taskService.getTask(req.params.id);
  if (!task) return res.status(404).json({ error: "not found" });
  res.json(task);
});

router.patch("/:id", (req, res) => {
  try {
    const task = taskService.updateTask(req.params.id, req.body || {});
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/:id/complete", (req, res) => {
  const task = taskService.completeTask(req.params.id);
  if (!task) return res.status(404).json({ error: "not found" });
  res.json(task);
});

module.exports = router;

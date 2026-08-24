const express = require("express");
const tasksRouter = require("./routes/tasks");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use("/tasks", tasksRouter);

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => console.log(`agent-poc listening on port ${PORT}`));
}

module.exports = app;

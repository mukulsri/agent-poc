let tasks = [];
let nextId = 1;

function createTask({ title, assignee }) {
  if (!title || typeof title !== "string") {
    throw new Error("title is required");
  }
  const task = {
    id: nextId++,
    title,
    assignee: assignee || null,
    status: "open",
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  return task;
}

function getTask(id) {
  return tasks.find((t) => t.id === Number(id));
}

function listTasks() {
  return tasks;
}

function listTasksSortedByTitle() {
  return tasks.toSorted((a, b) => a.title.localeCompare(b.title));
}

function completeTask(id) {
  const task = getTask(id);
  if (!task) return null;
  task.status = "done";
  task.completedAt = new Date().toISOString();
  return task;
}

function _resetForTests() {
  tasks = [];
  nextId = 1;
}

module.exports = {
  createTask,
  getTask,
  listTasks,
  listTasksSortedByTitle,
  completeTask,
  _resetForTests,
};

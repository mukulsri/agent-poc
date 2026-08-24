const taskService = require("../src/services/taskService");

beforeEach(() => {
  taskService._resetForTests();
});

describe("createTask", () => {
  it("creates a task with a title", () => {
    const task = taskService.createTask({ title: "Write docs" });
    expect(task.id).toBe(1);
    expect(task.title).toBe("Write docs");
    expect(task.status).toBe("open");
  });

  it("rejects a task without a title", () => {
    expect(() => taskService.createTask({})).toThrow("title is required");
  });
});

describe("updateTask", () => {
  it("sets priority on an existing task", () => {
    const task = taskService.createTask({ title: "Fix bug" });
    const updated = taskService.updateTask(task.id, { priority: "high" });
    expect(updated.priority).toBe("high");
  });
});

describe("completeTask", () => {
  it("marks an existing task as done", () => {
    const task = taskService.createTask({ title: "Ship feature" });
    const completed = taskService.completeTask(task.id);
    expect(completed.status).toBe("done");
  });

  it("returns null for a non-existent task", () => {
    expect(taskService.completeTask(999)).toBeNull();
  });
});

// const { adminAuth } = framework;
const status = require("http-status");
const controller = require("./controller");
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Welcome");
  });
  app.get("/todo-items", async (req, res) => {
    const reqData = {
      activityGroupId: req.query["activity_group_id"],
    };
    const result = await controller._GET_TODOS(reqData);
    handleResult(res, result);
  });
  app.get("/todo-items/:id", async (req, res) => {
    const reqData = {
      id: req.params.id,
    };
    const result = await controller._GET_TODO(reqData);
    handleResult(res, result);
  });
  app.post("/todo-items", async (req, res) => {
    const reqData = req.body;
    const result = await controller._CREATE_TODO(reqData);
    handleResult(res, result);
  });
  app.patch("/todo-items/:id", async (req, res) => {
    const reqData = {
      ...req.body,
      id: req.params.id,
    };
    const result = await controller._UPDATE_TODO(reqData);
    handleResult(res, result);
  });
  app.delete("/todo-items/:id", async (req, res) => {
    const reqData = {
      id: req.params.id,
    };
    const result = await controller._DELETE_TODO(reqData);
    handleResult(res, result);
  });
};

const handleResult = (res, [st, data, message]) => {
  if (st >= 200 && st <= 300) {
    res.status(st).send({ status: "Success", data, message });
  } else res.status(st).send({ status: status[st], data, message });
};

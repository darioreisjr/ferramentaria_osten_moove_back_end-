const { create, get, getId, update, remove } = require("../controllers/tool.controller");

exports.toolRoutes = (app) => {
  app.post("/tool", create);
  app.get("/tool", get);
  app.get("/tool/:id", getId);
  app.put("/tool/:id", update);
  app.delete("/tool/:id", remove);
}
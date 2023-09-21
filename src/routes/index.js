const { toolRoutes } = require("./tool.routes");

module.exports = (app) => {
  toolRoutes(app);
}